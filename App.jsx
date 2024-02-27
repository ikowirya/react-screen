import { StyleSheet, Image } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeTabNavigator}></Stack.Screen>
      <Stack.Screen name="Register"  options={{headerShown:false}}   component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/icon_home.png")}
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
        name="RegisterTab"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/icon_profile.png")}
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

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
