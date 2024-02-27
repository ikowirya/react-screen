import {
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title username="Muhammad Iko Wiryadirja"/>
      <Card/>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{backgroundColor:"blue", padding:10}}
      >
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    paddingLeft: 24,
    paddingRight: 24
  },
});

export default HomeScreen;
