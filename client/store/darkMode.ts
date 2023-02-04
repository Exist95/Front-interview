import { atom } from "recoil";
import ReactNativeRecoilPersist from "react-native-recoil-persist";

export const darkModeState = atom<boolean>({
  key: "darkModeState",
  default: true,
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
