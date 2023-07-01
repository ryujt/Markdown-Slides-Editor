import styled from "styled-components";

export const InputWrapper = styled.div`
  display: none;
`;

export const Image = styled.div`
  background-image: url("${({ url }) => url}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  height: 100px;
`;

export const Wrapper = styled.div`
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    background-color: rgba(0, 0, 0, 0.1);

    ${InputWrapper} {
      display: block;
    }
  }
`;
