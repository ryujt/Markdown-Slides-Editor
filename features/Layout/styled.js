import { mobile } from "constants/RWD";
import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 20px;

  ${mobile(`
  flex-direction: column;
  `)}
`;

export const Header = styled.div`
  flex: 0;
`;

export const WindowsWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  ${mobile(`
  flex-direction: column;
  `)}
`;

export const Window = styled.div`
  margin: 10px;
  box-shadow: -4px 0 8px #bfbfc3;
  flex: 1;
  overflow-y: scroll;
`;
