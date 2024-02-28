import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";

const Promotion = ({ banner }) => {
  const renderItem = ({ item }) => (
    <Image
      style={styles.banner}
      source={{ uri: item.image, height: 170, width: 300 }}
    />
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Promo & Diskon</Text>
        <Text style={styles.titleAll}>Lihat Semua</Text>
      </View>
      <FlatList data={banner} horizontal={true} renderItem={renderItem} />
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
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default Promotion;
