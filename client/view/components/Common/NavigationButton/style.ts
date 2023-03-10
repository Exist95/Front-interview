import styled from "styled-components/native";

export const BtnContainer = styled.TouchableOpacity`
  width: 40%;
  height: 8%;
  border-radius: 8%;
  background-color: ${(props) => props.theme.buttonColor};
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 400;
`;
