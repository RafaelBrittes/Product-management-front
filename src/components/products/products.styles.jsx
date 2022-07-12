import styled from "styled-components";

export const ProductsContainer = styled.div`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    margin: 0px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 5px 0 40px 0;
  button {
    background-color: #2c2c2c;
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    font-weight: 500;
    :hover {
      background-color: #ffffff;
      color: #000000;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
