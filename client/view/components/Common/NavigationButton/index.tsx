import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import { createAccount, requestLogin } from "../../../../model/authModel";
import { usersToken } from "../../../../store/login";
import { getQuestions } from "../../../../model/questionsModel";
import { INavigationButtonProps } from "../../../../types/navigationButton";
import { FormViewModel } from "../../../../vm/FormViewModel";
import { LoginViewModel } from "../../../../vm/LoginViewModel";
import { QuestionsViewModel } from "../../../../vm/QuestionsViewModel";
import * as S from "./style";

export const NavigationButton = ({
  text,
  destination,
  width,
  height,
}: INavigationButtonProps) => {
  const navigation = useNavigation<any>();
  const queryClient = useQueryClient();
  const { userName, email, password, resetForm, setUserId, setIsLogin } =
    FormViewModel();
  const { storeToken } = LoginViewModel();
  const {
    setQRandomNum,
    setARandomNum,
    selectARandomIndex,
    selectQRandomIndex,
    count,
  } = QuestionsViewModel();
  const [userToken, setUserToken] = useRecoilState(usersToken);

  const { mutate: mutateSignUp } = useMutation(createAccount, {
    onSuccess: (data) => {
      alert("회원가입에 성공했습니다!");
      navigation.navigate(destination);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      alert("회원가입에 실패했습니다.");
      console.log(error);
    },
  });

  const onSubmitSignUp = () => {
    resetForm();
    mutateSignUp({
      name: userName,
      email: email,
      password: password,
    });
  };

  const { mutate: mutateLogin } = useMutation(requestLogin, {
    onSuccess: (data) => {
      navigation.navigate(destination);
      console.log(data);
      storeToken(data.token);
      queryClient.invalidateQueries();
      setUserId(data.userId);
      setUserToken(data.token);
      console.log("이거 토큰?", data.token);
    },
    onError: (error) => {
      alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      console.log(error);
    },
  });

  const onSubmitLogin = () => {
    resetForm();
    mutateLogin({
      email: email,
      password: password,
    });
  };

  const { isLoading, data } = useQuery(["AllQuestions"], getQuestions);

  const startQuestion = () => {
    setQRandomNum(selectQRandomIndex(data?.length, 10));
    setARandomNum(selectARandomIndex(count - 1));
  };

  return (
    <S.BtnContainer
      onPress={() => {
        if (text === "회원가입") {
          onSubmitSignUp();
        } else if (text === "로그인") {
          onSubmitLogin();
        } else {
          navigation.navigate(destination);
        }
        if (destination === "Questions" && isLoading === false) startQuestion();
      }}
    >
      <S.BtnText>{text}</S.BtnText>
    </S.BtnContainer>
  );
};
