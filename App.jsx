import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./src/navigations/HomeStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
