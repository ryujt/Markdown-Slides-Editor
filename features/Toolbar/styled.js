import { mobile } from "constants/RWD";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  ${mobile(`
  flex-direction: column;
  `)}
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  justify-content: center;

  ${mobile(`
  flex-direction: row;
  `)}
`;
