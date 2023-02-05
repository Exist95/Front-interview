import { Link } from "@react-navigation/native";
import { NavigationButton } from "../components/Common/NavigationButton";
import { Container } from "../Questions/style";
import { useEffect } from "react";
import * as S from "./style";
import { Form } from "../components/Common/Form";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { DarkModeViewModel } from "../../vm/DarkModeViewModel";
import { LoginViewModel } from "../../vm/LoginViewModel";

export const LoginTemp = () => {
  const { theme } = DarkModeViewModel();
  const {
    EmailSaveCheck,
    isEmailSave,
    emailSaveValue,
    setEmail,
    SetIsEmailSave,
  } = LoginViewModel();

  useEffect(() => {
    if (emailSaveValue !== "") {
      setEmail(emailSaveValue);
      SetIsEmailSave(true);
    }
  }, []);

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
      <S.SubManuBox>
        <BouncyCheckbox
          isChecked={isEmailSave}
          fillColor="#f1b1bb"
          text="이메일 저장"
          iconStyle={{ borderColor: "#f1b1bb" }}
          textStyle={{
            textDecorationLine: "none",
            color: theme ? "white" : "black",
          }}
          onPress={(e: any) => EmailSaveCheck(e)}
        />
      </S.SubManuBox>
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
