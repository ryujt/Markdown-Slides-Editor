import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10.25px;
  overflow: auto;
  height: 100%;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin-bottom: 10px;
  & > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    resize: none;
    padding: 30px;
  }
`;

export const Delete = styled.div`
  z-index: 999;
  position: absolute;
  transform: translate(0, -100%);
`;
