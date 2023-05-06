import { saveAs } from "file-saver";
import moment from "moment";

const getCurrentTime = () => moment().format("MMMM-Do-YYYY-h-mm-ss-a");

export const download = (filename, htmlFile) => {
  const blob = new Blob([htmlFile], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${filename}.${getCurrentTime()}.html`);
};
