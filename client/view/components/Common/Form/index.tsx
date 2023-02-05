import { useEffect } from "react";
import { IFormProps } from "../../../../types/auth";
import { FormViewModel } from "../../../../vm/FormViewModel";
import { LoginViewModel } from "../../../../vm/LoginViewModel";
import * as S from "./style";

export const Form = ({ signup }: IFormProps) => {
  const {
    userName,
    email,
    password,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
  } = FormViewModel();

  return (
    <>
      {signup && (
        <S.Input
          value={userName}
          placeholder="유저 이름을 입력해 주세요"
          onChange={onChangeUserName}
        />
      )}
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
