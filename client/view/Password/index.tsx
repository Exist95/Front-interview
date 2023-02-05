import { Container } from "../Questions/style";
import { FormText, Input, Invalid } from "../components/Common/Form/style";
import * as S from "./style";
import { LoginTitle } from "../Login/style";
import { PasswordViewModel } from "../../vm/PasswordViewModel";
import { useEffect } from "react";
import { changePassword } from "../../model/passwordModel";
import { useMutation } from "@tanstack/react-query";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PasswordTemp = () => {
  const {
    newPassword,
    secondPassword,
    isValid,
    isConfirm,
    validNewPassword,
    confirmPassword,
    onChangeNewPassword,
    onChangeSecondPassword,
    resetPw,
  } = PasswordViewModel();
  const { userId, userToken, removeToken } = LoginViewModel();
  const navigation = useNavigation<any>();

  useEffect(() => {
    resetPw();
  }, []);

  useEffect(() => {
    validNewPassword();
    confirmPassword();
  }, [newPassword, secondPassword]);

  const { mutate: mutatePassword } = useMutation(changePassword, {
    onSuccess: (data) => {
      alert("비밀번호가 변경되었습니다.");
      removeToken;
      navigation.navigate("Login");
    },
    onError: (error) => {
      alert("문제가 발생했습니다. 다시 시도해 주세요.");
    },
  });

  const onPressChangeBtn = () => {
    mutatePassword({
      id: userId,
      password: newPassword,
      userToken: userToken,
    });
  };

  return (
    <Container style={{ justifyContent: "center" }}>
      <LoginTitle>비밀번호 변경</LoginTitle>
      <S.PasswordText>변경할 비밀번호를 입력해 주세요!</S.PasswordText>
      <Input
        value={newPassword}
        onChange={onChangeNewPassword}
        placeholder="새 비밀번호 (영문, 특수문자 조합 6자 이상)"
        secureTextEntry={true}
        style={
          isValid
            ? {
                marginBottom: 0,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "green",
              }
            : newPassword.length === 0
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
      {isValid ? (
        <FormText>올바른 비밀번호입니다.</FormText>
      ) : newPassword.length === 0 ? (
        <Invalid />
      ) : (
        <FormText>특수문자 포함 6자 이상 입력해 주세요.</FormText>
      )}
      <Input
        placeholder="새로운 비밀번호 확인"
        onChange={onChangeSecondPassword}
        secureTextEntry={true}
        style={
          isConfirm
            ? {
                marginBottom: 0,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "green",
              }
            : secondPassword.length === 0
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
        value={secondPassword}
      />
      {isConfirm ? (
        <FormText>비밀번호가 일치합니다.</FormText>
      ) : secondPassword.length === 0 ? (
        <Invalid />
      ) : (
        <FormText>비밀번호가 일치하지 않습니다.</FormText>
      )}
      <S.PasswordBtn
        onPress={() =>
          Alert.alert(
            "비밀번호 변경 재확인",
            "새로운 비밀번호로 변경하시겠습니까?",
            [
              { text: "취소" },
              {
                text: "확인",
                onPress: () => {
                  onPressChangeBtn();
                },
              },
            ]
          )
        }
        disabled={
          isValid &&
          isConfirm &&
          newPassword.length > 0 &&
          secondPassword.length > 0
            ? false
            : true
        }
        style={
          isValid &&
          isConfirm &&
          newPassword.length > 0 &&
          secondPassword.length > 0
            ? null
            : { backgroundColor: "gray" }
        }
      >
        <S.PasswordBtnText>비밀번호 변경</S.PasswordBtnText>
      </S.PasswordBtn>
    </Container>
  );
};
