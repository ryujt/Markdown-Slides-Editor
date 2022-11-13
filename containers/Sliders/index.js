import { Marp } from "@marp-team/marp-core";
import mermaidAPI from "mermaid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Sliders from "../../components/Sliders";
import { findContentInTag } from "../../helpers/regexFinder";
import { MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG } from "../../constants/htmlTag";
import {
  INLINE_STYLE_OPEN_TAG,
  INLINE_STYLE_CLOSE_TAG,
} from "../../constants/htmlTag";

const SlidersContainer = () => {
  const { pages } = useSelector((state) => state.pages);
  const [slides, setSlides] = useState({
    content: "",
    style: "",
  });

  useEffect(() => {
    mermaidAPI.initialize({
      startOnLoad: true,
    });
  });

  useEffect(() => {
    const markdowns = pages.map((data) => data?.markdown);
    const marp = new Marp();
    const { html, css } = marp.render(markdowns.join("\n---\n"));
    let content = html;

    findContentInTag(MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG, content)?.forEach(
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
          content = content.replace(raw, woInlineStyleSvgGraph);
        } catch (e) {
          console.warn(e);
        }
      },
    );
    setSlides({ content, style: css });
  }, [pages]);

  return <Sliders content={slides.content} style={slides.style} />;
};

export default SlidersContainer;
