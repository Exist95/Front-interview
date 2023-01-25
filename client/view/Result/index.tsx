import React from "react";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";

export const ResultTemp = () => {
  return (
    <S.Container>
      <Header />
      <S.UserResult>
        User님의{"\n"}
        점수는{"\n"}
        80점입니다.
      </S.UserResult>
      <NavigationButton text={"홈으로"} destination={"Main"} />
    </S.Container>
  );
};
