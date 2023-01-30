import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { mutateSignUp } from "../model/authModel";

export const FormViewModel = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const onSubmitSignUp = () => {
    // mutateSignUp({
    //   name: userName,
    //   email: email,
    //   password: password,
    // });
  };

  return {
    userName,
    email,
    password,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    onSubmitSignUp,
  };
};
