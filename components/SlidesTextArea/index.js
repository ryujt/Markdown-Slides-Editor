import { TextArea, TextAreaWrapper, Wrapper } from "./styled";

const SlidesTextArea = ({ pages, onChangeFactory }) => {
  return (
    <Wrapper>
      {pages.map(({ markdown, id }, index) => (
        <TextAreaWrapper key={index}>
          <TextArea value={markdown} onChange={onChangeFactory(id)} />
        </TextAreaWrapper>
      ))}
    </Wrapper>
  );
};

export default SlidesTextArea;
