import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as S from "./style";

export const Button = () => {
  const navigation = useNavigation<any>();
  return (
    <S.BtnContainer
      style={{ bottom: 170, right: 20 }}
      onPress={() => {
        navigation.navigate("Questions");
      }}
    >
      <S.BtnText>문제 풀러 가기</S.BtnText>
    </S.BtnContainer>
  );
};
