import { SHARE_BASE64_MARKDOWN_KEY } from "constants/share";
import HtmlViewer from "features/HtmlViewer";
import useBase64FromQueryString from "hooks/useQueryString";

const Viewer = () => {
  const { html } = useBase64FromQueryString(SHARE_BASE64_MARKDOWN_KEY);
  return <HtmlViewer html={html} />;
};

export default Viewer;
