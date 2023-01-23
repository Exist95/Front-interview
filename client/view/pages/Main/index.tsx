import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Common/Button";
import { Header } from "../../components/Common/Header/index";
import { Container, MainTitle } from "./style";

export const Main = () => {
  return (
    <Container>
      <Header />
      <MainTitle>프터뷰</MainTitle>
      <Button />
      <StatusBar style="light" />
    </Container>
  );
};
