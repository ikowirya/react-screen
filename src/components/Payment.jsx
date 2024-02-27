import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const Payment = () => {
  const listImage = [
    require("../../assets/icon_telco.png"),
    require("../../assets/icon_pln.png"),
    require("../../assets/icon_pdam.png"),
    require("../../assets/icon_school.png")
  ];

  const renderItem = ({ item }) => (
    <View style={styles.featureIcon}>
      <TouchableOpacity>
        <Image source={item}></Image>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>List Pembayaran</Text>
      <View style={styles.container}>
        <FlatList
          data={listImage}
          numColumns={4}
          columnWrapperStyle={{justifyContent:"space-between"}}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 24,
  },
  featureIcon: {
    alignItems: "center",
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "#852884",
  },
});

export default Payment;
