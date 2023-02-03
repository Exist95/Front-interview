import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Note } from "../pages/Note";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ranking } from "../pages/Ranking";
import { MyPage } from "../pages/MyPage";
import Result from "../pages/Result";
import { Main } from "../pages/Main";

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
    </Tab.Navigator>
  );
};
