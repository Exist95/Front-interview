import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Note } from "../pages/Note";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ranking } from "../pages/Ranking";
import { MyPage } from "../pages/MyPage";
import { StackNavigator } from "./Stack";
import Result from "../pages/Result";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../theme/theme";
import { DarkModeViewModel } from "../vm/DarkModeViewModel";
import { Main } from "../pages/Main";
import { Login } from "../pages/Auth/Login";

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: "white",
        tabBarActiveTintColor: "#ff8dc7",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="홈"
        component={Main}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={23} />,
        }}
      />
      <Tab.Screen
        name="오답노트"
        component={Note}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="notebook" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="랭킹"
        component={Ranking}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="trophy" size={23} />,
        }}
      />
      <Tab.Screen
        name="나의 프터뷰"
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="human-greeting-variant" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="결과창"
        component={Result}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="human-greeting-variant" size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
