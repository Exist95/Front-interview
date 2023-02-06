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
  font-size: 40px;
  text-align: center;
  justify-content: center;
  flex: 1;
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const DarkModeButton = styled.View`
  background-color: #ebb5b4;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const UserButtons = styled.View`
  background-color: #ebb5b4;
  width: 150px;
  height: 150px;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 7px;
`;

export const PasswordChangeBtn = styled(TouchableOpacity)`
  margin-bottom: 20%;
  width: 130px;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
`;

export const RankingBox = styled.Text`
  font-size: 50px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const LoadingSpinner = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;
