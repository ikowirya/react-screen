import {
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Payment from "../components/Payment";
import Promotion from "../components/Promotion";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title username="Muhammad Iko Wiryadirja"/>
      <Card/>
      <Payment/>
      <Promotion/>
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
