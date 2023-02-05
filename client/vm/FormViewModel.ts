import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRecoilState } from "recoil";
import {
  emailState,
  passwordState,
  userNameState,
  validEmailState,
  validPasswordState,
  validUserNameState,
} from "../store/form";
import { loginState, userIdState } from "../store/login";

export const FormViewModel = () => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [validUserName, setValidUserName] = useRecoilState(validUserNameState);
  const [validEmail, setValidEmail] = useRecoilState(validEmailState);
  const [validPassword, setValidPassword] = useRecoilState(validPasswordState);

  const emailExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const passwordExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  const onChangeUserName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUserName(e.nativeEvent.text);
  };

  const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
  };

  const onChangePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPassword(e.nativeEvent.text);
  };

  const resetForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const validForm = () => {
    if (userName.length >= 1) {
      setValidUserName(true);
    } else {
      setValidUserName(false);
    }
    if (email.length >= 1 && emailExp.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    if (password.length >= 6 && passwordExp.test(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  return {
    userName,
    email,
    password,
    validUserName,
    validEmail,
    validPassword,
    userId,
    validForm,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    resetForm,
    setUserId,
    setIsLogin,
  };
};
