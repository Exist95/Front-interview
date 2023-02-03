import { Link } from "@react-navigation/native";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Container } from "../Questions/style";
import * as S from "./style";
import { Form } from "../components/Common/Form";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TabBar } from "../../router";

export const LoginTemp = () => {
  return (
    <Container style={{ justifyContent: "center" }}>
      <S.LoginTitle>Login</S.LoginTitle>
      <Form />
      {/* <MaterialCommunityIcons
          size={15}
          color={"#232323"}
          name="email-variant"
        />
      <MaterialCommunityIcons
        style={{ position: "absolute", left: 35, bottom: 361 }}
        size={15}
        color={"#232323"}
        name="key-variant"
      /> */}
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
