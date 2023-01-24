import React from "react";
import { Pressable } from "react-native";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../../store/darkMode";
import { DarkModeViewModel } from "../../../vm/DarkModeViewModel";
import * as S from "./style";

export const DarkMode = () => {
  const { onClickDarkMode } = DarkModeViewModel();
  return (
    <Pressable onPress={onClickDarkMode}>
      <S.DarkMode
        source={require("../../../assets/fterview_icon-removebg-preview.png")}
      />
    </Pressable>
  );
};
