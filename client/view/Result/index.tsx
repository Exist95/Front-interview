import React, { useEffect } from "react";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Header } from "../components/Common/Header";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Login } from "../../pages/Auth/Login";
import { Text } from "react-native";

export const ResultTemp = () => {
  const navigation = useNavigation<any>();
  const { isLogin } = LoginViewModel();

  useEffect(() => {
    if (!isLogin) navigation.navigate("Login");
  }, []);

  return (
    <S.Container>
      {isLogin ? (
        <>
          <Header />
          <S.UserResult>
            User님의{"\n"}
            점수는{"\n"}
            80점입니다.
          </S.UserResult>
          <NavigationButton text={"홈으로"} destination={"Main"} />
        </>
      ) : (
        <>
          <Text>접근할 수 없는 페이지입니다. 로그인해 주세요!</Text>
          <NavigationButton text={"로그인 하러 가기"} destination={"Login"} />
        </>
      )}
    </S.Container>
  );
};
