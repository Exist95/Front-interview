import React from "react";
import { Pressable } from "react-native";
import { DarkModeViewModel } from "../../../vm/DarkModeViewModel";
import * as S from "./style";

export const DarkMode = () => {
  const { onClickDarkMode, theme } = DarkModeViewModel();
  return (
    <Pressable onPress={onClickDarkMode}>
      {theme ? (
        <S.DarkMode source={require("../../../assets/moon.png")} />
      ) : (
        <S.DarkMode source={require("../../../assets/sun.png")} />
      )}
    </Pressable>
  );
};
