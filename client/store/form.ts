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

export const validUserNameState = atom<boolean>({
  key: "validUserNameState",
  default: false,
});

export const validEmailState = atom<boolean>({
  key: "validEmailState",
  default: false,
});

export const validPasswordState = atom<boolean>({
  key: "validPasswordState",
  default: false,
});
