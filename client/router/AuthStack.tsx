import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Auth/Login";
import { SignUp } from "../pages/Auth/SignUp";
import { Main } from "../pages/Main";
import { MyPage } from "../pages/MyPage";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Main" component={Main} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="MyPage" component={MyPage} />
    </AuthStack.Navigator>
  );
};
