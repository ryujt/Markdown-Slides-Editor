import styled from "styled-components";

import TextEditor from "../TextEditor";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2px;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

export const TextArea = styled(TextEditor)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 30px;
`;
