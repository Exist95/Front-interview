import { Link } from "@react-navigation/native";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Container } from "../Questions/style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as S from "./style";

const LoginTemp = () => {
  return (
    <Container style={{ justifyContent: "center" }}>
      <S.LoginTitle>Login</S.LoginTitle>
      <S.Input
        accessibilityLanguage="eng"
        placeholder="아이디를 입력해 주세요."
      />
      <MaterialCommunityIcons
        style={{ position: "absolute", left: 35, bottom: 399 }}
        size={15}
        color={"#232323"}
        name="email-variant"
      />
      <S.Input placeholder="비밀번호를 입력해 주세요." />
      <MaterialCommunityIcons
        style={{ position: "absolute", left: 35, bottom: 336 }}
        size={15}
        color={"#232323"}
        name="key-variant"
      />
      <NavigationButton text="로그인" destination="Main" />
      <S.LoginText>
        계정이 없으신가요?{" "}
        <Link style={{ color: "#f1b1bb" }} to="/SignUp">
          가입하러 가기
        </Link>
      </S.LoginText>
    </Container>
  );
};

export default LoginTemp;
