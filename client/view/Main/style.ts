import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
  justify-content: space-between;
  padding: 20% 5%;
`;

export const MainTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 100px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
  align-items: left;
`;

const Box = styled.View`
  flex: 2;
`;

export const AnimationBox = Animated.createAnimatedComponent(Box);
