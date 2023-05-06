import { saveAs } from "file-saver";
import moment from "moment";

const getCurrentTime = () => moment().format("MMMM-Do-YYYY-h-mm-ss-a");

export const download = (filename, htmlFile) => {
  const blob = new Blob([htmlFile], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${filename}.${getCurrentTime()}.html`);
};

export const printIframe = (() => {
  const id = "OPEN_PRINT_DIALOG_BY_IFRAME_ID";

  const print = () => {
    const iframe = document.getElementById(id);
    if (iframe) {
      iframe.contentWindow.print();
    }
  };

  return {
    id,
    print,
  };
})();
