import { FormViewModel } from "../../../vm/FormViewModel";
import * as S from "./style";

export const Form = () => {
  const { email, password, onChangeEmail, onChangePassword } = FormViewModel();

  return (
    <>
      <S.Input
        value={email}
        keyboardType={"email-address"}
        onChange={onChangeEmail}
        placeholder="이메일을 입력해 주세요."
      />
      <S.Input
        value={password}
        onChange={onChangePassword}
        secureTextEntry={true}
        placeholder=" 비밀번호를 입력해 주세요."
      />
    </>
  );
};
