import { StyleSheet, Text, View, ImageBackground } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home"  options={{ headerShown: false }} component={HomeScreen} />
          <Tab.Screen name="Register"  options={{ headerShown: false }} component={RegisterScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
