import styled, { css } from "styled-components";

// when wrap icon with empty div will make parent height bigger then icon
const avoidParentHeightPadding = `
  vertical-align: top;
`;

export const Image = styled.div`
  ${avoidParentHeightPadding}
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
