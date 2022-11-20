import { Header, PageWrapper, Window, WindowsWrapper } from "./styled";

const EditorLayout = ({ toolBar, textEditor, slidPreview }) => {
  return (
    <PageWrapper>
      <Header>{toolBar}</Header>
      <WindowsWrapper>
        <Window>{textEditor}</Window>
        <Window>{slidPreview}</Window>
      </WindowsWrapper>
    </PageWrapper>
  );
};

export default EditorLayout;
