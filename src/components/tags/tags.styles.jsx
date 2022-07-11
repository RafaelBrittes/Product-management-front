import styled from "styled-components";


export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const Tag = styled.div`
    text-align:center;
    min-width: 200px;
    margin: 5px 0px 5px 0px;
    background-color: ${(props) => (props.deleted ? " #ff0000c5" : "#bbb8b850")};
    text-decoration: ${(props) => (props.deleted ? "line-through" : "auto")};
    padding: 10px;
    border-radius: 15px;
`