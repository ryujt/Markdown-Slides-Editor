import dynamic from "next/dynamic";

import { TextAreaWrapper, Wrapper } from "./styled";

const AceEditor = dynamic(() => import("./AceEditor/index.js"), {
  ssr: false,
});

const SlidesTextArea = ({ pages, onChangeFactory }) => {
  return (
    <Wrapper>
      {pages.map(({ markdown, id }, index) => (
        <TextAreaWrapper key={index}>
          <AceEditor value={markdown} onChange={onChangeFactory(id)} />
        </TextAreaWrapper>
      ))}
    </Wrapper>
  );
};

export default SlidesTextArea;
