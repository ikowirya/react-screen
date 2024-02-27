import { StyleSheet, View, Text, ScrollView, Image, FlatList } from "react-native";

const Promotion = () => {
  const listImage = [
    require("../../assets/icon_promotion.png"),
    require("../../assets/icon_banner_special.png")
  ];

  const renderItem = ({ item }) => (
      <Image
        style={styles.banner}
        source={item}
      />
  );
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Promo & Diskon</Text>
        <Text style={styles.titleAll}>Lihat Semua</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={listImage}
          numColumns={2}
          renderItem={renderItem}
          scrollEnabled={false}
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
    height: 180,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default Promotion;
