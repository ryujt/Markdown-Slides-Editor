import EditorLayout from "containers/EditorLayout";
import SlidesContainer from "containers/Slides";
import SlidesTextAreaContainer from "containers/SlidesTextArea";
import ToolBar from "containers/ToolBar";

export default function App() {
  return (
    <EditorLayout
      toolBar={<ToolBar />}
      textEditor={<SlidesTextAreaContainer />}
      slidPreview={<SlidesContainer />}
    />
  );
}
