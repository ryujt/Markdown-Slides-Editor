import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  padding: 20px;
  display: none;
  z-index: 9999;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  border 1px solid ${(props) => props.color}
`;

export const Wrapper = styled.div`
  &:focus-within {
    ${Modal} {
      display: block;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  justify-content: right;
  display: flex;
  gap: 10px;
`;
