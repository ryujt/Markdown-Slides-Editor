import { Marp } from '@marp-team/marp-core'
import Sliders from "../../components/Sliders";
import data from "./data";

const SlidersContainer = () => {
  const { markdowns } = data;
  const marp = new Marp()
  const { html, css } = marp.render(markdowns.join("\n---\n"));
  return <Sliders content={html} style={css} />;
};

export default SlidersContainer;
