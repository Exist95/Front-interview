import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #232323;
  padding: 20% 5%;
  align-items: center;
`;

const QContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 40;
  font-weight: 600;
  color: #ffb9b9;
  margin-bottom: 7%;
`;
const QContent = styled.Text`
  font-size: 30;
  color: white;
`;

const AContainer = styled.View`
  flex: 2;
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Answer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  width: 45%;
  border-radius: 5;
  border: 2px solid rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
  padding: 5% 2%;
  margin: 0 2.5% 10% 2.5%;
`;

const AContent = styled.Text`
  color: white;
  font-size: 20;
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
  AContent,
};
