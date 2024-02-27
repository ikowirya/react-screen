import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Payment from "../components/Payment";
import Promotion from "../components/Promotion";
import ParentComponent from "../components/ParentComponent";

const HomeScreen = () => {
  return (
    <ParentComponent>
      <View style={styles.container}>
        <Title username="Muhammad Iko Wiryadirja" />
        <Card />
        <Payment />
        <Promotion />
      </View>
    </ParentComponent>
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
