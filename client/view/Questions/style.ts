import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #232323;
  padding: 20% 10%;
`;

const QContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 40;
  font-weight: 600;
  color: #ffb9b9;
  margin-right: 10;
`;
const QContent = styled.Text`
  font-size: 30;
  color: white;
`;

const AContainer = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const BtnContainer = styled.View`
  flex-direction: row;
`;

const Answer = styled.View`
  width: 40%;
  height: 10%;
  border-radius: 5;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  QContainer,
  QContent,
  Title,
  AContainer,
  BtnContainer,
  Answer,
  ScrollView,
};
