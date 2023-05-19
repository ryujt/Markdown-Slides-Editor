import HtmlViewer from "features/HtmlViewer";
import { decodeString } from "helpers/pako";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { pareMarkdownToHtml } from "../../helpers/markdown";

const Viewer = () => {
  const [html, setHTML] = useState("");
  const router = useRouter();
  const {
    query: { data },
  } = router;

  useEffect(() => {
    try {
      if (data) {
        const decoded = decodeString(data);
        pareMarkdownToHtml(decoded).then(setHTML);
      }
    } catch (e) {
      console.error(e);
    }
  }, [data]);

  return <HtmlViewer html={html} />;
};

export default Viewer;
