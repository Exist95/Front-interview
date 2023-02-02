import { useState } from "react";
import { Pressable } from "react-native";
import { DarkMode } from "./DarkMode/index";
import { useNavigation } from "@react-navigation/native";
import * as S from "./style";
import { LoginViewModel } from "../../vm/LoginViewModel";

export const MyPageTemp = () => {
  const { isLogin } = LoginViewModel();
  const navigation = useNavigation<any>();

  return (
    <S.Container>
      {isLogin ? (
        <S.UserName>유저네임</S.UserName>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <S.UserName>로그인 해주세요</S.UserName>
        </Pressable>
      )}
      {isLogin && <S.Profile source={require("../../assets/User.png")} />}
      <S.ButtonBox>
        <S.Button>
          <DarkMode />
        </S.Button>
        <S.Button>
          {isLogin ? (
            <S.RankingBox>랭킹{"\n"}1위</S.RankingBox>
          ) : (
            <S.RankingBox>랭킹{"\n"}-위</S.RankingBox>
          )}
        </S.Button>
      </S.ButtonBox>
    </S.Container>
  );
};

//유저 프로필 크기 수정해야 함
