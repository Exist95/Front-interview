import { useNavigation } from "@react-navigation/native";
import React from "react";
import { INavigationButtonProps } from "../../../../types/NavigationButton";
import * as S from "./style";

export const NavigationButton = ({ text }: INavigationButtonProps) => {
  const navigation = useNavigation<any>();
  return (
    <S.BtnContainer
      onPress={() => {
        navigation.navigate("Questions");
      }}
    >
      <S.BtnText>{text}</S.BtnText>
    </S.BtnContainer>
  );
};
