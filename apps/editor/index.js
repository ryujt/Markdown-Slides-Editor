import HtmlViewer from "features/HtmlViewer";
import Layout from "features/Layout";
import MarkdownEditor from "features/MarkdownEditor";
import ToolBar from "features/Toolbar";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage, editPage, fetchTemplates } from "redux/actions/pages";

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

const EditorReduxWrapper = () => {
  const { pages, html, templates } = useSelector((state) => state.pages);

  const dispatch = useDispatch();

  const onEditPage = ({ id, markdown }) => {
    dispatch(editPage({ id, markdown }));
  };

  useEffect(() => {
    if (!templates) dispatch(fetchTemplates());
  }, []);

  const onAddPageFromTemplate = (markdown) => {
    dispatch(addPage({ markdown }));
  };

  return (
    <Editor
      toolbar={{
        githubLink:
          "https://github.com/yushaing-frontend/Markdown-Slides-Editor",
        templates,
        onAddPageFromTemplate,
        htmlForExport: html,
      }}
      markdowns={{ pages, onEditPage, html }}
    />
  );
};

export default EditorReduxWrapper;
