import styled from "styled-components";

export const Tag = styled.div`
  text-align: center;
  width: 200px;
  margin: 5px 0px 5px 0px;
  background-color: ${(props) => (props.added ? " #00ff405a" : "#bbb8b850")};
  padding: 2px;
  border-radius: 15px;
`;
