import Head from "next/head";
import { saveAs } from "file-saver";
import moment from "moment";

const Sliders = ({ content, style }) => {
  const filename = "demo";
  const save = () => {
    const htmlFile = `
        <!DOCTYPE html>
        <html><body>
          <style>${style}</style>
          ${content}
        </body></html>
        `;
    const blob = new Blob([htmlFile], { type: "text/plain;charset=utf-8" });
    saveAs(
      blob,
      `${filename}.${moment().format("MMMM-Do-YYYY-h-mm-ss-a")}.html`,
    );
  };

  return (
    <div>
      <button onClick={save}>Export</button>
      <Head>
        <style>{style}</style>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Sliders;
