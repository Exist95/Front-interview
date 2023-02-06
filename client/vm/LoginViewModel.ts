import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { emailState } from "../store/form";
import {
  loginState,
  userIdState,
  usersToken,
  savedEmail,
  savedEmailValue,
} from "../store/login";

export const LoginViewModel = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [userToken, setUserToken] = useRecoilState(usersToken);
  const [email, setEmail] = useRecoilState(emailState);
  const navigation = useNavigation<any>();
  const [isEmailSave, SetIsEmailSave] = useRecoilState(savedEmail);
  const [emailSaveValue, setEmailSaveValue] = useRecoilState(savedEmailValue);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        setIsLogin(true);
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  };

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
      getToken();
    } catch (e) {
      console.log(e);
    }
  };

  const removeToken = async (token: string) => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      console.log(e);
    }
  };

  const loginNavigate = () => {
    if (!isLogin) navigation.navigate("Login");
  };

  //true, false
  const EmailSaveCheck = (e: any) => {
    SetIsEmailSave(e);
    if (e) {
      setEmailSaveValue(email);
    } else {
      setEmailSaveValue("");
    }
  };

  return {
    isLogin,
    storeToken,
    setIsLogin,
    setUserId,
    removeToken,
    userId,
    userToken,
    setUserToken,
    loginNavigate,
    EmailSaveCheck,
    isEmailSave,
    setEmail,
    email,
    emailSaveValue,
    SetIsEmailSave,
  };
};
