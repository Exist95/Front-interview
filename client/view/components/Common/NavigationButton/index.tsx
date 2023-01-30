import { useNavigation } from "@react-navigation/native";
import React from "react";
import { INavigationButtonProps } from "../../../../types/NavigationButton";
import { FormViewModel } from "../../../../vm/FormViewModel";
import * as S from "./style";

export const NavigationButton = ({
  text,
  destination,
  width,
  height,
}: INavigationButtonProps) => {
  const { onSubmitSignUp } = FormViewModel();
  const navigation = useNavigation<any>();
  return (
    <S.BtnContainer
      onPress={() => {
        onSubmitSignUp();
        navigation.navigate(destination);
      }}
    >
      <S.BtnText>{text}</S.BtnText>
    </S.BtnContainer>
  );
};
