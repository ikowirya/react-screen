import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Payment from "../components/Payment";
import Promotion from "../components/Promotion";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/icon_background.png")}
      >
        <View style={styles.container}>
          <Title username="Muhammad Iko Wiryadirja" />
          <Card />
          <Payment />
          <Promotion />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    height: 850,
    resizeMode: "cover",
  },
});

export default HomeScreen;
