import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from ".";
import { ILoginForm, ILoginRes, ISignUpForm, ISignUpRes } from "../types/auth";

const queryClient = useQueryClient();

export const createAccount = async (formData: ISignUpForm) => {
  const response = await api.post<ISignUpRes>("/api/users/signup", formData);
  return response;
};

export const { mutate: mutateSignUp } = useMutation(createAccount, {
  onSuccess: (data) => {
    console.log(data);
    queryClient.invalidateQueries();
  },
  onError: (error) => {
    console.log(error);
  },
});

export const requestLogin = async (formData: ILoginForm) => {
  const response = await api.post<ILoginRes>("/api/users/login", formData);
  return response;
};

export const { mutate: mutateLogin } = useMutation(requestLogin, {
  onSuccess: () => {
    queryClient.invalidateQueries();
  },
  onError: (error) => {
    console.log(error);
  },
});
