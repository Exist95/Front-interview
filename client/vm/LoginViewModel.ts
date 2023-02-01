import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { loginState } from "../store/login";

export const LoginViewModel = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setIsLogin(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  return { isLogin, storeToken };
};
