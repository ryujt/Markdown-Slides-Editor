import Slides from "components/Slides";
import { download } from "helpers/file";
import { openHtmlWindow } from "helpers/window";
import { useSelector } from "react-redux";

const SlidesContainer = () => {
  const { html } = useSelector((state) => state.pages);

  if (!html) return null;
  return (
    <>
      <button onClick={() => openHtmlWindow(html)}>Preview</button>
      <button onClick={() => download("slide", html)}>Download</button>
      <Slides html={html} />
    </>
  );
};

export default SlidesContainer;
