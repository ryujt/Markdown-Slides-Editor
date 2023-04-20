import EditorLayout from "components/EditorLayout";

const EditorLayoutContainer = ({ toolBar, textEditor, slidPreview }) => {
  return (
    <EditorLayout
      toolBar={toolBar}
      textEditor={textEditor}
      slidPreview={slidPreview}
    />
  );
};

export default EditorLayoutContainer;
