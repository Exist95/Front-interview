import React, { useEffect } from "react";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { QuestionsViewModel } from "../../vm/QuestionsViewModel";

export const ResultTemp = () => {
  const { isLogin, loginNavigate } = LoginViewModel();
  const { score } = QuestionsViewModel();

  useEffect(() => {
    loginNavigate();
  }, []);

  return (
    <>
      {isLogin ? (
        <S.Container>
          <Header />
          <S.UserResult>
            User님의{"\n"}
            점수는{"\n"}
            {score}점입니다.
          </S.UserResult>
          <NavigationButton text={"홈으로"} destination={"Main"} />
        </S.Container>
      ) : (
        <NavigateLogin />
      )}
    </>
  );
};
