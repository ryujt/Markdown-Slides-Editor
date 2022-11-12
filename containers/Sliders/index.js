import { Marp } from "@marp-team/marp-core";
import Sliders from "../../components/Sliders";
import data from "./data";
import mermaidAPI from "mermaid";
import { useEffect, useState } from "react";
import _ from "underscore";

const SlidersContainer = () => {
  const [content, setContent] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    mermaidAPI.initialize({
      startOnLoad: true,
    });

    const { markdowns } = data;
    const marp = new Marp();
    const { html, css } = marp.render(markdowns.join("\n---\n"));
    let marpHtml = html;
    const openTag = `<code class="language-mermaid">`;
    const closeTag = `</code>`;
    const regex = `${openTag}(.|\n)*?${closeTag}`;
    const founds = [...html.matchAll(regex)]?.map((found) => found[0]);

    founds?.forEach((found, index) => {
      const markdownHTML = found?.replace(openTag, "").replace(closeTag, "");
      const markdownText = _.unescape(markdownHTML);
      const svgGraph = mermaidAPI.render(`id${index}`, markdownText);
      marpHtml = marpHtml.replace(found, svgGraph);
    });
    setContent(marpHtml);
    setStyle(css);
  }, []);

  return <Sliders content={content} style={style} />;
};

export default SlidersContainer;
