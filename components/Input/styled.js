import styled from "styled-components";

export const Field = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
