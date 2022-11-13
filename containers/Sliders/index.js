import { Marp } from "@marp-team/marp-core";
import mermaidAPI from "mermaid";
import { useEffect, useState } from "react";

import data from "./data";
import Sliders from "../../components/Sliders";
import { findContentInTag } from "../../helpers/regexFinder";
import { MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG } from "../../constants/mermaid";
import {
  INLINE_STYLE_OPEN_TAG,
  INLINE_STYLE_CLOSE_TAG,
} from "../../constants/inlineStyle";

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

    findContentInTag(MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG, marpHtml)?.forEach(
      (found, index) => {
        try {
          const { raw, mermaid } = found;
          const svgGraph = mermaidAPI.render(`id${index}`, mermaid);
          const svgInlineStyle = findContentInTag(
            INLINE_STYLE_OPEN_TAG,
            INLINE_STYLE_CLOSE_TAG,
            svgGraph,
          )[0];
          const woInlineStyleSvgGraph = svgGraph.replace(
            svgInlineStyle.raw,
            "",
          );
          marpHtml = marpHtml.replace(raw, woInlineStyleSvgGraph);
        } catch (e) {
          console.warn(e);
        }
      },
    );
    setContent(marpHtml);
    setStyle(css);
  }, []);

  return <Sliders content={content} style={style} />;
};

export default SlidersContainer;
