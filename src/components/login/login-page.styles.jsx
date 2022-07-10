import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 0px;
  }

  input {
    background: none;
    background-color: #e6e6e66e;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;
    &:focus {
      background-color: #ffffff;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
