import { Marp } from "@marp-team/marp-core";
import mermaidAPI from "mermaid";

const unescape = (str) => {
  return String(str).replace(/&(?:amp|lt|gt|quot|#39);/g, function (match) {
    switch (match) {
      case "&amp;":
        return "&";
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&#39;":
        return "'";
      default:
        return match;
    }
  });
};

const findContentInTag = (openTag, closeTag, html) => {
  const regex = `${openTag}(.|\n)*?${closeTag}`;
  const founds = [...html.matchAll(regex)]?.map((found) => {
    return {
      raw: found[0],
      mermaid: unescape(found[0]?.replace(openTag, "").replace(closeTag, "")),
    };
  });

  return founds;
};

const setMermaidSvgStyle = (html) => {
  const createElementFromHTML = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  };
  const convertElementToHTML = (element) => {
    var div = document.createElement("div");
    div.appendChild(element);
    return div.innerHTML;
  };

  const element = createElementFromHTML(html);
  element.setAttribute("width", "100%");
  element.setAttribute("style", "100%");

  return convertElementToHTML(element);
};

const findMermaidFromMarpHTML = (html) => {
  const MERMAID_OPEN_TAG = `<pre is="marp-pre" data-auto-scaling="downscale-only"><code class="language-mermaid">`;
  const MERMAID_CLOSE_TAG = `</code></pre>`;
  return findContentInTag(MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG, html);
};

mermaidAPI.initialize({
  startOnLoad: true,
});

const getHTMLFromTemplate = (body, style) => {
  const html = `
  <!DOCTYPE html>
    <title>Preview</title>
  <html>
    <body>
      <style>
      body{
        margin:0px;
      }
      ${style}
      </style>
      ${body}
    </body>
  </html>
  `;
  return html;
};

export const pagesToMarkdown = (pages) => {
  const markdowns = pages.map((data) => data?.markdown);
  const wholeMarkdown = markdowns.join("\n\n---\n\n");
  return wholeMarkdown;
};

export const pareMarkdownToHtml = async (markdown) => {
  const marp = new Marp();
  const { html, css } = marp.render(markdown);

  const parseMermaid2HTML = async (id, mermaid) => {
    try {
      const { svg: svgGraph } = await mermaidAPI.render(id, mermaid);
      return setMermaidSvgStyle(svgGraph);
    } catch (e) {
      return e;
    }
  };

  const mermaidHtmlPairs = findMermaidFromMarpHTML(html);
  const parserPromises = mermaidHtmlPairs.map(async (found, index) => {
    const { raw, mermaid } = found;
    const mermaidHtml = await parseMermaid2HTML(`id${index}`, mermaid);
    return { raw, mermaidHtml };
  });

  const mermaidMappingPairs = await Promise.all(parserPromises);

  const content = mermaidMappingPairs.reduce(
    (previousHTML, { raw, mermaidHtml }) => {
      return previousHTML.replace(raw, mermaidHtml);
    },
    html,
  );

  return getHTMLFromTemplate(content, css);
};
