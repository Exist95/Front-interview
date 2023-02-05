import styled from "styled-components/native";
import {
  BtnContainer,
  BtnText,
} from "../components/Common/NavigationButton/style";

export const PasswordText = styled.Text`
  font-size: 20%;
  font-weight: 300;
  margin-bottom: 10%;
  color: ${(props) => props.theme.textColor};
`;

export const PasswordBtn = styled(BtnContainer)`
  margin-top: 5%;
`;

export const PasswordBtnText = styled(BtnText)``;
