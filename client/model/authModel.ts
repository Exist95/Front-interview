import { BASE_PATH } from "@env";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { ILoginForm, ILoginRes, ISignUpForm, ISignUpRes } from "../types/auth";

export const createAccount = async (formData: ISignUpForm) => {
  const response = await axios.post<ISignUpRes>(
    `${BASE_PATH}/api/users/signup`,
    formData
  );
  return response.data;
};

export const requestLogin = async (formData: ILoginForm) => {
  const response = await axios.post<ILoginRes>(
    `${BASE_PATH}/api/users/login`,
    formData
  );
  return response.data;
};

export const DeleteUser = async (id: string, token: string) => {
  const response = await axios.delete(`${BASE_PATH}/api/users/${id}`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUserName = async (id: string) => {
  const response = await axios.get(`${BASE_PATH}/api/users/${id}`);
  return response.data;
};
