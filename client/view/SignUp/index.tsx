import { Container } from "../Questions/style";
import * as S from "../Login/style";
import { Form } from "../components/Form";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Link } from "@react-navigation/native";
import { Input } from "../components/Form/style";
import { FormViewModel } from "../../vm/FormViewModel";

export const SignUpTemp = () => {
  const { onChangeUserName, userName } = FormViewModel();

  return (
    <Container style={{ justifyContent: "center" }}>
      <S.LoginTitle>Sign Up</S.LoginTitle>
      <Input
        value={userName}
        placeholder="유저 이름을 입력해 주세요"
        onChange={onChangeUserName}
      />
      <Form />
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
