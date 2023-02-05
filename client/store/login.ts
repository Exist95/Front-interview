import { atom } from "recoil";
import ReactNativeRecoilPersist from "react-native-recoil-persist";

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});

export const userIdState = atom({
  key: "userIdState",
  default: "",
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});

export const usersToken = atom({
  key: "usersToken",
  default: "",
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});

export const savedEmail = atom({
  key: "savedEmail",
  default: false,
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});

export const savedEmailValue = atom({
  key: "savedEmailValue",
  default: "",
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
