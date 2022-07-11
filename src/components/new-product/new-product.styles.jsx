import styled from "styled-components";

export const NewProductBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;

  label {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  input {
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.185) 0px 5px 15px;
    border: 0px;
    margin: 40px 0 40px 0;
  }
`;
