import { atom } from "recoil";

export const newPwState = atom<string>({
  key: "newPwState",
  default: "",
});

export const secondPwState = atom<string>({
  key: "secondPwState",
  default: "",
});

export const isValidPwState = atom<boolean>({
  key: "isValidPwState",
  default: false,
});

export const isConfirmPwState = atom<boolean>({
  key: "isConfirmPwState",
  default: false,
});
