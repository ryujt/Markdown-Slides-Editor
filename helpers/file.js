import { saveAs } from "file-saver";
import moment from "moment";

export const download = (filename, htmlFile) => {
  const blob = new Blob([htmlFile], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${filename}.${moment().format("MMMM-Do-YYYY-h-mm-ss-a")}.html`);
};
