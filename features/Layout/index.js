import { Header, PageWrapper, Window, WindowsWrapper } from "./styled";

const EditorLayout = ({ header, views }) => {
  return (
    <PageWrapper>
      <Header>{header}</Header>
      <WindowsWrapper>
        {views.map((view, index) => (
          <Window key={index}>{view}</Window>
        ))}
      </WindowsWrapper>
    </PageWrapper>
  );
};

export default EditorLayout;
