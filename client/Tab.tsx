import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Main } from "./view/pages/Main";
import Note from "./view/pages/Note";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ranking from "./view/pages/Ranking";
import MyPage from "./view/pages/MyPage";
import { StackNavigator } from "./router/Routes";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
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
          component={StackNavigator}
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
            tabBarIcon: () => (
              <MaterialCommunityIcons name="trophy" size={23} />
            ),
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
    </NavigationContainer>
  );
};

export default TabBar;
