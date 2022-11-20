import EditorLayout from "@/containers/EditorLayout";
import PageTemplateListContainer from "@/containers/PageTemplateList";
import SlidesContainer from "@/containers/Slides";
import SlidesTextAreaContainer from "@/containers/SlidesTextArea";

export default function App() {
  return (
    <EditorLayout
      toolBar={<PageTemplateListContainer />}
      textEditor={<SlidesTextAreaContainer />}
      slidPreview={<SlidesContainer />}
    />
  );
}
