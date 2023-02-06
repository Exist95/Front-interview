import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRecoilState } from "recoil";
import {
  isConfirmPwState,
  isValidPwState,
  newPwState,
  secondPwState,
} from "../store/password";

export const PasswordViewModel = () => {
  const [newPassword, setNewPassword] = useRecoilState(newPwState);
  const [secondPassword, setSecondPassword] = useRecoilState(secondPwState);
  const [isValid, setIsValid] = useRecoilState(isValidPwState);
  const [isConfirm, setIsConfirm] = useRecoilState(isConfirmPwState);

  const passwordExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  const validNewPassword = () => {
    if (newPassword.length >= 6 && passwordExp.test(newPassword)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const confirmPassword = () => {
    if (newPassword === secondPassword && secondPassword.length > 0) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  };

  const onChangeNewPassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setNewPassword(e.nativeEvent.text);
  };

  const onChangeSecondPassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSecondPassword(e.nativeEvent.text);
  };

  const resetPw = () => {
    setNewPassword("");
    setSecondPassword("");
  };

  return {
    newPassword,
    secondPassword,
    isValid,
    isConfirm,
    validNewPassword,
    confirmPassword,
    onChangeNewPassword,
    onChangeSecondPassword,
    resetPw,
  };
};
