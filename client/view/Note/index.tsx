import React, { useState } from "react";
import { useEffect } from "react";
import { getUserName } from "../../model/authModel";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { FormViewModel } from "../../vm/FormViewModel";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Header } from "../components/Common/Header";
import { NoteList } from "./NoteList";
import * as S from "./style";

export const NoteTemp = () => {
  const { isLogin, loginNavigate } = LoginViewModel();
  const { userId } = FormViewModel();
  const [userWrongAnswer, setUserWrongAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLogin) {
      loginNavigate();
      getUserName(userId).then((res) => {
        setUserWrongAnswers(res.user.wrongAnswer), setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      {isLogin ? (
        !isLoading ? (
          <S.Container>
            <S.TextBox>
              <S.NoteTitle>오답노트</S.NoteTitle>
              <S.NotePoint>{userWrongAnswer.length}</S.NotePoint>
            </S.TextBox>
            <S.NoteTable>
              {userWrongAnswer.map((item: any, i) => {
                return <NoteList key={i} item={item} />;
              })}
            </S.NoteTable>
          </S.Container>
        ) : (
          <S.LoadingSpinner />
        )
      ) : (
        <NavigateLogin />
      )}
    </>
  );
};
