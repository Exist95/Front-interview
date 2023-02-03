import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
  padding: 20% 5%;
  height: 100%;
`;

export const AnimationContainer = styled.View`
  display: flex;
  flex: 2;
`;

export const MainTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 100px;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
  align-items: left;
`;
