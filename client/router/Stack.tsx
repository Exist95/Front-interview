import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { TabBar } from ".";
import { Login } from "../pages/Auth/Login";
import { SignUp } from "../pages/Auth/Signup";
import { MyPage } from "../pages/MyPage";
import { Questions } from "../pages/Questions";
import Result from "../pages/Result";
import { darkTheme, lightTheme } from "../theme/theme";
import { DarkModeViewModel } from "../vm/DarkModeViewModel";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const { theme } = DarkModeViewModel();

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={TabBar} />
          <Stack.Screen name="Questions" component={Questions} />
          <Stack.Screen name="MyPage" component={MyPage} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
