import Slides from "components/Slides";
import { pareMarkdownToHtml } from "helpers/markdown";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SlidesContainer = () => {
  const { pages } = useSelector((state) => state.pages);
  const [slides, setSlides] = useState({
    html: "",
    style: "",
  });

  useEffect(() => {
    const markdowns = pages.map((data) => data?.markdown);
    pareMarkdownToHtml(markdowns.join("\n---\n")).then(({ html, css }) =>
      setSlides({ html, style: css }),
    );
  }, [pages]);

  return <Slides content={slides.html} style={slides.style} />;
};

export default SlidesContainer;
