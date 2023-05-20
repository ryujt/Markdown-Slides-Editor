import { SHARE_BASE64_MARKDOWN_KEY } from "constants/share";
import HtmlViewer from "features/HtmlViewer";
import Layout from "features/Layout";
import MarkdownEditor from "features/MarkdownEditor";
import ToolBar from "features/Toolbar";
import { pagesToMarkdown } from "helpers/markdown";
import uuid from "helpers/uuid";
import useBase64FromQueryString from "hooks/useQueryString";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPage,
  deletePage,
  editPage,
  fetchTemplates,
  setPages,
} from "redux/actions/pages";

const Editor = ({ markdowns, toolbar }) => {
  const viewerRef = useRef(null);

  return (
    <Layout
      header={
        <ToolBar
          print={viewerRef?.current?.print}
          githubLink={toolbar.githubLink}
          templates={toolbar.templates}
          onAddPageFromTemplate={toolbar.onAddPageFromTemplate}
          html={toolbar.htmlForExport}
          markdown={toolbar.markdown}
        />
      }
      views={[
        <MarkdownEditor
          key="MarkdownEditor"
          pages={markdowns.pages}
          onChange={markdowns.onEditPage}
        />,
        <HtmlViewer key="HtmlViewer" ref={viewerRef} html={markdowns.html} />,
      ]}
    />
  );
};

const useQueryStringToRedux = () => {
  const { pages, html } = useBase64FromQueryString(SHARE_BASE64_MARKDOWN_KEY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pages) {
      dispatch(
        setPages({
          payload: {
            pages: pages.map((markdown) => ({
              id: uuid(),
              markdown,
            })),
            html,
          },
        }),
      );
    }
  }, [pages, html, dispatch]);
};

const EditorReduxWrapper = () => {
  const dispatch = useDispatch();
  const { pages, html, templates } = useSelector((state) => state.pages);

  useQueryStringToRedux();

  useEffect(() => {
    if (!templates) dispatch(fetchTemplates());
  }, []);

  const onEditPage = useCallback(
    ({ id, markdown }) => {
      if (markdown === null) return dispatch(deletePage({ id }));
      dispatch(editPage({ id, markdown }));
    },
    [dispatch],
  );

  const onAddPageFromTemplate = useCallback(
    (markdown) => {
      dispatch(addPage({ markdown }));
    },
    [dispatch],
  );

  const preprocessDone = !!templates;
  if (!preprocessDone) return null;
  return (
    <Editor
      toolbar={{
        githubLink:
          "https://github.com/yushaing-frontend/Markdown-Slides-Editor",
        templates,
        onAddPageFromTemplate,
        htmlForExport: html,
        markdown: pagesToMarkdown(pages),
      }}
      markdowns={{ pages, onEditPage, html }}
    />
  );
};

export default EditorReduxWrapper;
