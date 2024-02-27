import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { constants } from "../utils/constants";
import { isValidNumberTelepon } from "../utils/validation";
import ParentComponent from "../components/ParentComponent";

const RegisterScreen = () => {
  const [otp, setOtp] = useState("");
  const [isValid, setValid] = useState(true);
  const navigation = useNavigation();
  const handleInputChange = (text) => {
    setOtp(text);
    const phoneNumberRegex = isValidNumberTelepon(text);
    if (phoneNumberRegex) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleClick = async () => {
    try {
      const numberTelepon = isValidNumberTelepon(otp);
      if (numberTelepon) {
        setValid(true);
        navigation.navigate("Home");
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <ParentComponent>
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <Image source={require("../../assets/icon_arrow_back.png")}></Image>
          <Text style={styles.title}>Daftar Baru</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleContent}>Assalamualaikum</Text>
          <Text>Selamat datang di Syariah</Text>
          <Image
            style={{ width: "100%" }}
            source={require("../../assets/icon_illustration.png")}
          />
          <Text style={styles.spacing}>
            {constants.register.banner_description}
          </Text>
          <Text style={styles.nomorTelepon}>Nomor Telepon</Text>
          <TextInput
            style={styles.inputNomorTelepon}
            placeholder="Input Number"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text)}
          ></TextInput>
          {!isValid && (
            <Text style={styles.validation}>
              Nomor yang anda masukkan valid
            </Text>
          )}

          <Text>Contoh: 081234567890</Text>
          <View>
            <Text style={{ textAlign: "justify" }}>
              {constants.register.kebijakan}
            </Text>
          </View>
          <Text style={{ color: "#852884", fontWeight: "bold" }}>
            Kebijakan Privasi Syariah
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#852884",
              borderRadius: 10,
              marginTop: 24,
              padding: 16,
            }}
            onPress={handleClick}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Kirim OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParentComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
  },
  image: {
    height: 850,
    resizeMode: "cover",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
  },
  card: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    padding: 24,
  },
  titleContent: {
    fontSize: 24,
    color: "#39B54A",
    fontWeight: "bold",
  },
  spacing: {
    marginTop: 24,
  },
  nomorTelepon: {
    marginTop: 24,
    fontWeight: "bold",
  },
  inputNomorTelepon: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginTop: 10,
  },
  validation: {
    color: "red",
  },
});

export default RegisterScreen;
