import Slides from "components/Slides";
import { useSelector } from "react-redux";

const SlidesContainer = () => {
  const { html } = useSelector((state) => state.pages);

  if (!html) return null;
  return <Slides html={html} />;
};

export default SlidesContainer;
