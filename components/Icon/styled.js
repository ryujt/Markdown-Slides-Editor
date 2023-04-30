import styled, { css } from "styled-components";

export const Image = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
  ${(props) =>
    props.src &&
    css`
      background-image: url("${props.src}");
      background-size: cover;
    `};
`;
