import { printIframe } from "helpers/file";

const Slides = ({ html }) => {
  return (
    <iframe
      id={printIframe.id}
      style={{ width: "100%", height: "100%" }}
      srcDoc={html}
    />
  );
};

export default Slides;
