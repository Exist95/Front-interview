import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../view/pages/Main";
import MyPage from "../view/pages/MyPage";
import Questions from "../view/pages/Questions";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};
