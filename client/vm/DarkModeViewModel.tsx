import { useRecoilState, useRecoilValue } from "recoil";
import { darkModeState } from "../store/darkMode";

export const DarkModeViewModel = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const theme = useRecoilValue(darkModeState);
  const onClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { theme, onClickDarkMode };
};
