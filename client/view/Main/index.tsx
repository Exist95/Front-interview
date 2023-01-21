import { StatusBar } from "expo-status-bar";
import Button from "../Button";
import Footer from "../Footer";
import Header from "../Header";
import { Container, MainTitle } from "./style";

const Main = () => {
  return (
    <Container>
      <Header />
      <MainTitle>프터뷰</MainTitle>
      <Footer />
      <Button />
      <StatusBar style="light" />
    </Container>
  );
};

export default Main;
