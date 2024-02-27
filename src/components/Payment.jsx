import { StyleSheet, View, Text, Image, FlatList } from "react-native";
const Payment = () => {
  const listImage = [
    {
      url: require("../../assets/icon_telco.png"),
    },
    {
      url: require("../../assets/icon_pln.png"),
    },
    {
      url: require("../../assets/icon_pdam.png"),
    },
    {
      url: require("../../assets/icon_school.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.featureIcon}>
      <Image source={item.url}></Image>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listImage}
        numColumns={4}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 24
  },
  featureIcon: {
    alignItems: "center",
    width: "25%",
  },
});

export default Payment;
