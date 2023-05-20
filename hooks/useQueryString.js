import { decodeString } from "helpers/pako";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { markdownToPages, pareMarkdownToHtml } from "../helpers/markdown";

const useBase64FromQueryString = (key) => {
  const [html, setHTML] = useState("");
  const [pages, setPages] = useState(null);
  const router = useRouter();
  const data = router.query[key];

  useEffect(() => {
    try {
      if (data) {
        const decoded = decodeString(data);
        const pages = markdownToPages(decoded);
        setPages(pages);
        pareMarkdownToHtml(decoded).then(setHTML);
      }
    } catch (e) {
      console.error(e);
    }
  }, [data]);

  return { html, pages };
};

export default useBase64FromQueryString;
