import { ScrollView, Text } from "react-native";
import {
  AContainer,
  Answer,
  BtnContainer,
  Container,
  QContainer,
  QContent,
  Title,
} from "./style";

const Questions = () => {
  return (
    <Container>
      <QContainer>
        <Title>Q.</Title>
        <QContent>질문입니다.</QContent>
      </QContainer>
      <AContainer>
        <Title>A.</Title>
        <ScrollView style={{ flex: 1 }}>
          <BtnContainer>
            <Answer>
              <Text>1번</Text>
            </Answer>
            <Answer>
              <Text>1번</Text>
            </Answer>
            <Answer>
              <Text>1번</Text>
            </Answer>
            <Answer>
              <Text>1번</Text>
            </Answer>
          </BtnContainer>
        </ScrollView>
      </AContainer>
    </Container>
  );
};
export default Questions;
