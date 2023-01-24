import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
  justify-content: center;
  padding: 20% 5%;
`;

export const UserName = styled.Text`
  color: ${(props) => props.theme.textColor};
  flex: 1;
  font-size: 50px;
  text-align: center;
  justify-content: center;
`;
