import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BaseButton}{
    margin-bottom: 50px;
  }
`;
