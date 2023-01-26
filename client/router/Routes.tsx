import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Auth/Login";
import { SignUp } from "../pages/Auth/SignUp";
import { Main } from "../pages/Main";
import { MyPage } from "../pages/MyPage";
import { Questions } from "../pages/Questions";
import Result from "../pages/Result";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </>
  );
};
