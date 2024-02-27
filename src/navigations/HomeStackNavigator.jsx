import { HomeTabNavigator } from "./HomeTabNavigator";
import RegisterScreen from "../screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
export const HomeStackNavigator = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeTabNavigator}></Stack.Screen>
        <Stack.Screen name="Register"  options={{headerShown:false}}   component={RegisterScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };