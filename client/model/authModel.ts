import { BASE_PATH } from "@env";
import axios from "axios";
import { ILoginForm, ILoginRes, ISignUpForm, ISignUpRes } from "../types/auth";

export const createAccount = async (formData: ISignUpForm) => {
  const response = await axios.post<ISignUpRes>(
    `${BASE_PATH}/api/users/signup`,
    {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }
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
