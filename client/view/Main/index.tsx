import { StatusBar } from "expo-status-bar";
import { NavigationButton } from "../components/common/NavigationButton";
import { Header } from "../components/common/Header";
import * as S from "./style";

export const MainTemp = () => {
  return (
    <S.Container>
      <Header />
      <S.SubTitle>내 귀에</S.SubTitle>
      <S.AnimationBox>
        <S.MainTitle>프터뷰</S.MainTitle>
      </S.AnimationBox>
      <NavigationButton text={"문제 풀러가기"} />
      <StatusBar style="light" />
    </S.Container>
  );
};
