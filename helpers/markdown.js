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

const removeInlineStyle = (html) => {
  const INLINE_STYLE_OPEN_TAG = `style="`;
  const INLINE_STYLE_CLOSE_TAG = `"`;

  const style = findContentInTag(
    INLINE_STYLE_OPEN_TAG,
    INLINE_STYLE_CLOSE_TAG,
    html,
  )[0];

  return html.replace(style.raw, "");
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

export const pareMarkdownToHtml = async (markdown) => {
  const marp = new Marp();
  const { html, css } = marp.render(markdown);

  const parseMermaid2HTML = async (id, mermaid) => {
    try {
      const { svg: svgGraph } = await mermaidAPI.render(id, mermaid);
      return removeInlineStyle(svgGraph);
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
