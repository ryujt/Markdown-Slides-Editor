import { Marp } from "@marp-team/marp-core";
import Slides from "components/Slides";
import { MERMAID_CLOSE_TAG, MERMAID_OPEN_TAG } from "constants/htmlTag";
import {
  INLINE_STYLE_CLOSE_TAG,
  INLINE_STYLE_OPEN_TAG,
} from "constants/htmlTag";
import { findContentInTag } from "helpers/regexFinder";
import mermaidAPI from "mermaid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SlidesContainer = () => {
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

    const parseMermaid2HTML = async (id, mermaid) => {
      const { svg: svgGraph } = await mermaidAPI.render(id, mermaid);
      const svgInlineStyle = findContentInTag(
        INLINE_STYLE_OPEN_TAG,
        INLINE_STYLE_CLOSE_TAG,
        svgGraph,
      )[0];
      const woInlineStyleSvgGraph = svgGraph.replace(svgInlineStyle.raw, "");
      return woInlineStyleSvgGraph;
    };

    findContentInTag(MERMAID_OPEN_TAG, MERMAID_CLOSE_TAG, content)?.forEach(
      async (found, index) => {
        try {
          const { raw, mermaid } = found;
          content = content.replace(
            raw,
            await parseMermaid2HTML(`id${index}`, mermaid),
          );
        } catch (e) {
          console.warn(e);
        }
      },
    );

    setSlides({ content, style: css });
  }, [pages]);

  return <Slides content={slides.content} style={slides.style} />;
};

export default SlidesContainer;
