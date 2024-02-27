import { StyleSheet, Image } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
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
          name="Register"
          options={{ tabBarIcon: () => (
            <Image
              source={require("./assets/icon_profile.png")} 
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
          headerShown: false }}
          component={RegisterScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
