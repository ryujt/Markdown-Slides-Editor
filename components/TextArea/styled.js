import styled from "styled-components";

export const Field = styled.textarea`
  background-color: transparent;
  border: none;
  height: 5em;
  border-radius: 5px;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
