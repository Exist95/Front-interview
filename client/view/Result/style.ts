import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
  justify-content: space-between;
  padding: 20% 5%;
`;

export const UserResult = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 40px;
  align-items: center;
  text-align: center;
  flex: 2;
`;
