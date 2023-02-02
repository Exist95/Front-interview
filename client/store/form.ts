import { atom } from "recoil";

export const userNameState = atom<string>({
  key: "userNameState",
  default: "",
});

export const emailState = atom<string>({
  key: "emailState",
  default: "",
});

export const passwordState = atom<string>({
  key: "passwordState",
  default: "",
});
