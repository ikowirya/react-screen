import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const Card = () => {
  const listImage = [
    {
      title: "QRIS",
      url: "../../assets/icon_qris.png",
      url: require("../../assets/icon_qris.png"),
    },
    {
      title: "Kirim Data",
      url: require("../../assets/icon_kirim_dana.png"),
    },
    {
      title: "Top Up",
      url: require("../../assets/icon_topup.png"),
    },
  ];
  const items = [];
  const renderItem = ({ item }) => (
    <View style={styles.featureIcon}>
      <Image source={item.url}></Image>
      <Text style={styles.featureText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.title}>Saldo</Text>
        <Text style={styles.cash}>Rp 2.000.000</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.feature}>
        <FlatList data={listImage} numColumns={3} renderItem={renderItem} horizontal={false}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    borderRadius: 10,
    marginTop: 30,
    padding: 24,
  },
  horizontal: {
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#852884",
    flex: 1,
  },
  cash: {
    color: "#852884",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#852884",
    marginTop: 24,
  },
  feature: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureIcon: {
    alignItems: "center",
    width: "33.3%",
  },
  featureText: {
    marginTop: 20,
  },
});
export default Card;
