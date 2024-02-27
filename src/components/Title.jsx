import { Image, StyleSheet, Text, View } from "react-native";

const Title = ({username}) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.greeting}>Assalamualaikum</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={require("../../assets/icon_notification.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center"
  },
  horizontal: {
    flex: 1,
  },
  greeting: {
    color: "white",
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Title;
