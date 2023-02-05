import { useEffect } from "react";
import { IFormProps } from "../../../../types/auth";
import { FormViewModel } from "../../../../vm/FormViewModel";
import * as S from "./style";

export const Form = ({ signup }: IFormProps) => {
  const {
    userName,
    email,
    password,
    validUserName,
    validEmail,
    validPassword,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    validForm,
  } = FormViewModel();

  useEffect(() => {
    validForm();
  }, [userName, email, password]);

  return (
    <>
      {signup && (
        <>
          <S.Input
            value={userName}
            placeholder="유저 이름을 입력해 주세요"
            onChange={onChangeUserName}
            style={
              validUserName
                ? {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "green",
                  }
                : userName.length === 0
                ? {
                    marginBottom: 0,
                  }
                : {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "red",
                  }
            }
          />
          {validUserName ? (
            <S.FormText>올바른 유저 이름입니다.</S.FormText>
          ) : userName.length === 0 ? (
            <S.Invalid />
          ) : (
            <S.FormText>더 길게 입력해 주세요.</S.FormText>
          )}
          <S.Input
            value={email}
            keyboardType={"email-address"}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해 주세요."
            style={
              validEmail
                ? {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "green",
                  }
                : email.length === 0
                ? {
                    marginBottom: 0,
                  }
                : {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "red",
                  }
            }
          />
          {validEmail ? (
            <S.FormText>올바른 이메일입니다.</S.FormText>
          ) : email.length === 0 ? (
            <S.Invalid />
          ) : (
            <S.FormText>이메일 형식이 맞지 않습니다.</S.FormText>
          )}
          <S.Input
            value={password}
            onChange={onChangePassword}
            secureTextEntry={true}
            placeholder=" 비밀번호를 입력해 주세요."
            style={
              validPassword
                ? {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "green",
                  }
                : password.length === 0
                ? {
                    marginBottom: 0,
                  }
                : {
                    marginBottom: 0,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "red",
                  }
            }
          />
          {validPassword ? (
            <S.FormText>올바른 비밀번호입니다.</S.FormText>
          ) : password.length === 0 ? (
            <S.Invalid />
          ) : (
            <S.FormText>특수문자 포함 6자 이상 입력해 주세요.</S.FormText>
          )}
        </>
      )}
      {!signup && (
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
      )}
    </>
  );
};
