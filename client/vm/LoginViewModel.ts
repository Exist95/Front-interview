import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState, userIdState, usersToken } from "../store/login";

export const LoginViewModel = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [userToken, setUserToken] = useRecoilState(usersToken);

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

  return {
    isLogin,
    storeToken,
    setIsLogin,
    setUserId,
    removeToken,
    userToken,
  };
};
