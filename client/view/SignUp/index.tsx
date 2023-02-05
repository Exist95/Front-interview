import { Container } from "../Questions/style";
import * as S from "../Login/style";
import { Form } from "../components/Common/Form";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Link } from "@react-navigation/native";
import { FormViewModel } from "../../vm/FormViewModel";
import { useEffect } from "react";

export const SignUpTemp = () => {
  const { resetForm } = FormViewModel();

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <Container style={{ justifyContent: "center" }}>
      <S.LoginTitle>Sign Up</S.LoginTitle>
      <Form signup={true} />
      <NavigationButton text="회원가입" destination="Login" />
      <S.LoginText>
        이미 계정이 있으신가요?{" "}
        <Link style={{ color: "#f1b1bb" }} to="/Login">
          로그인하러 가기
        </Link>
      </S.LoginText>
    </Container>
  );
};
