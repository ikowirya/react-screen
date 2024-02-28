import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { listImageHome } from "../utils/Constants";

const Card = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.featureIcon}>
      <Image source={item.url}></Image>
      <Text style={styles.featureText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.title}>Saldo</Text>
        <Text style={styles.cash}>Rp 2.000.000</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.feature}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={listImageHome}
          numColumns={3}
          renderItem={renderItem}
          scrollEnabled={false}
        />
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
  },
  featureIcon: {
    alignItems: "center",
  },
  featureText: {
    marginTop: 20,
  },
});
export default Card;
