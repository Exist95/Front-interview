import { useState } from "react";
import { Profile } from "../components/Common/Header/style";
import { DarkMode } from "./DarkMode/index";
import * as S from "./style";

export const MyPageTemp = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <S.Container>
        {isLogin ? (
          <S.UserName>유저네임</S.UserName>
        ) : (
          <S.UserName>로그인{"\n"} 해주세요</S.UserName>
        )}
        <Profile />
        <DarkMode />
      </S.Container>
    </>
  );
};
