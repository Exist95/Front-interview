import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BtnContainer, BtnText } from "./style";

export const Button = () => {
  const navigation = useNavigation<any>();
  return (
    <BtnContainer
      style={{ bottom: 170, right: 20 }}
      onPress={() => {
        navigation.navigate("Questions");
      }}
    >
      <BtnText>문제 풀러 가기</BtnText>
    </BtnContainer>
  );
};
