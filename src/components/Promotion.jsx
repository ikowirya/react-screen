import {
  StyleSheet,
  View,
  Text,
  ScrollView,
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.banner}
          source={require("../../assets/icon_promotion.png")}
        />
        <Image
          resizeMode="cover"
          style={styles.banner}
          source={require("../../assets/icon_promotion.png")}
        />
      </ScrollView>
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
    
    width: 280, // Adjust the width of the image
    height: 180, // Adjust the height of the image
    marginHorizontal: 10, // Adjust the margin as needed
    borderRadius: 10,
  },
});

export default Promotion;
