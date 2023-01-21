import { TouchableOpacity } from "react-native";
import { FooterBtn, Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <TouchableOpacity>
        <FooterBtn>홈</FooterBtn>
      </TouchableOpacity>
      <TouchableOpacity>
        <FooterBtn>오답노트</FooterBtn>
      </TouchableOpacity>
      <FooterBtn>로고</FooterBtn>
      <TouchableOpacity>
        <FooterBtn>랭킹</FooterBtn>
      </TouchableOpacity>
      <TouchableOpacity>
        <FooterBtn>나의 프터뷰</FooterBtn>
      </TouchableOpacity>
    </Container>
  );
};

export default Footer;
