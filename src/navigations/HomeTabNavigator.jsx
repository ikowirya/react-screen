import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const HomeTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Beranda">
      <Tab.Screen
        name="Beranda"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icon_home.png")}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profil"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icon_profile.png")}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
          headerShown: false,
        }}
        component={RegisterScreen}
      />
    </Tab.Navigator>
  );
};
