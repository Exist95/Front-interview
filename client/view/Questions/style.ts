import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20% 5%;
  align-items: center;
`;

const QContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 7%;
`;

const QContent = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
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

const Answer = styled.Pressable`
  background-color: rgba(0, 0, 0, 0.3);
  width: 45%;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
  padding: 5% 2%;
  margin: 0 2.5% 10% 2.5%;
`;

const AContent = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
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
