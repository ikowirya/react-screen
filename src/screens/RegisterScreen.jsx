import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Image,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/icon_background.png")}
      >
        <View style={styles.container}>
          <View style={styles.horizontal}>
            <Image source={require("../../assets/icon_arrow_back.png")}></Image>
            <Text style={styles.title}>Daftar Baru</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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
  horizontal: {
    flexDirection:"row",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 15
  },
});

export default RegisterScreen;
