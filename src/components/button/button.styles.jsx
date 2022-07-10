import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 25vw;
  width: auto;
  height: 30px;
  line-height: 30px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
    border: 1px solid black;
  }
`;
