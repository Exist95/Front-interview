import React, { useEffect, useState } from "react";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { QuestionsViewModel } from "../../vm/QuestionsViewModel";
import { useMutation } from "@tanstack/react-query";
import { patchResult } from "../../model/questionsModel";
import { getUserName } from "../../model/authModel";

export const ResultTemp = () => {
  const { isLogin, loginNavigate, userId, userToken } = LoginViewModel();
  const [userNickName, setUserNickName] = useState("");
  const { score, wrongAnswersArr } = QuestionsViewModel();
  const { mutate: mutateResult } = useMutation(patchResult, {
    onError: (error) => {
      alert("문제가 발생했습니다. 다시 시도해 주세요.");
    },
  });

  useEffect(() => {
    loginNavigate();
    mutateResult({
      id: userId,
      totalPoint: score,
      wrongAnswer: wrongAnswersArr,
      userToken: userToken,
    });
    if (isLogin) {
      getUserName(userId).then((res) => setUserNickName(res.user.name));
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <S.Container>
          <Header />
          <S.UserResult>
            {userNickName}님의{"\n"}
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
