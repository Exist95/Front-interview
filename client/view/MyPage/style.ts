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
  text-decoration: underline ${(props) => props.theme.textColor};
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.View`
  background-color: silver;
  width: 150px;
  height: 150px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;
