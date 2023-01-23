import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import Header from "../../components/Header";
import * as S from "./style";

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.MainTitle>프터뷰</S.MainTitle>
      <Button />
      <StatusBar style="light" />
    </S.Container>
  );
};

export default Main;
