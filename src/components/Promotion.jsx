import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const Promotion = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Promo & Diskon</Text>
        <Text style={styles.titleAll}>Lihat Semua</Text>
      </View>
      <Image style={styles.banner} source={require("../../assets/icon_promotion.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 24,
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "#852884",
    flex: 1,
  },
  titleAll: {
    marginTop: 24,
    fontWeight: "bold",
    color: "#2C8A73",
  },
  banner: {
    marginTop: 24,
    width: "100%"
  }
});

export default Promotion;
