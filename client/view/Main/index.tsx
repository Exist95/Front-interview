import { StatusBar } from "expo-status-bar";
import { Button } from "../components/common/Button";
import { Header } from "../components/common/Header";
import * as S from "./style";

export const MainTemp = () => {
  return (
    <S.Container>
      <Header />
      <S.MainTitle>프터뷰</S.MainTitle>
      <Button />
      <StatusBar style="light" />
    </S.Container>
  );
};