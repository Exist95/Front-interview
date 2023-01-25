import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Profile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const LoginBox = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  font-weight: 600;
  justify-content: center;
`;

export const LoginText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
