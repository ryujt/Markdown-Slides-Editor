import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  flex: 0;
`;

export const WindowsWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Window = styled.div`
  margin: 10px;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;
