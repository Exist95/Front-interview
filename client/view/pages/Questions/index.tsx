import { Text } from "react-native";
import * as S from "./style";

const Questions = () => {
  return (
    <S.Container>
      <S.QContainer>
        <S.Title>Q.</S.Title>
        <S.QContent>질문입니다.</S.QContent>
      </S.QContainer>
      <S.AContainer>
        <S.Title>A.</S.Title>
        <S.ScrollView>
          <S.BtnContainer>
            <S.Answer>
              <Text>1번</Text>
            </S.Answer>
            <S.Answer>
              <Text>1번</Text>
            </S.Answer>
            <S.Answer>
              <Text>1번</Text>
            </S.Answer>
            <S.Answer>
              <Text>1번</Text>
            </S.Answer>
          </S.BtnContainer>
        </S.ScrollView>
      </S.AContainer>
    </S.Container>
  );
};
export default Questions;
