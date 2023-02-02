import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { loginState } from "../store/login";

export const LoginViewModel = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

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

  return { isLogin, storeToken, getToken };
};
