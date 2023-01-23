import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "../pages/Main";
import { MyPage } from "../pages/MyPage";
import { Questions } from "../pages/Questions";

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
      </Stack.Navigator>
    </>
  );
};
