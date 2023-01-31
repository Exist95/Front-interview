import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createAccount, requestLogin } from "../../../../model/authModel";
import { INavigationButtonProps } from "../../../../types/NavigationButton";
import * as S from "./style";

export const NavigationButton = ({
  text,
  destination,
  width,
  height,
}: INavigationButtonProps) => {
  const navigation = useNavigation<any>();
  const queryClient = useQueryClient();

  const { mutate: mutateSignUp } = useMutation(createAccount, {
    onSuccess: (data) => {
      alert("success!");
      console.log(data);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitSignUp = () => {
    mutateSignUp({
      name: "hee",
      email: "test@hee.com",
      password: "heetest",
    });
  };

  const { mutate: mutateLogin } = useMutation(requestLogin, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitLogin = () => {
    mutateLogin({
      email: "test@hee.com",
      password: "heetest",
    });
  };

  return (
    <S.BtnContainer
      onPress={() => {
        if (text === "회원가입") {
          onSubmitSignUp();
        } else if (text === "로그인") {
          onSubmitLogin();
        }
        navigation.navigate(destination);
      }}
    >
      <S.BtnText>{text}</S.BtnText>
    </S.BtnContainer>
  );
};
