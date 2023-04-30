import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  gap: 10px;
  padding: 10px;
  height: 100%;
`;

export const Item = styled.div`
  cursor: pointer;
  height: 100%;

  &:hover {
    border: #0969da solid 1px;
  }
`;

export const Content = styled.iframe`
  pointer-events: none;
  height: 100%;

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
