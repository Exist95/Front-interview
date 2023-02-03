import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRecoilState } from "recoil";
import { emailState, passwordState, userNameState } from "../store/form";
import { loginState, userIdState } from "../store/login";

export const FormViewModel = () => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);

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

  return {
    userName,
    email,
    password,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    resetForm,
    setUserId,
    userId,
    setIsLogin,
  };
};
