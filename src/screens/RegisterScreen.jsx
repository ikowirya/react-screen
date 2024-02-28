import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { constants } from "../utils/Constants";
import { isValidNumberTelepon, validationChecked } from "../utils/Validation";
import ParentComponent from "../components/ParentComponent";

const RegisterScreen = () => {
  const [otp, setOtp] = useState("");
  const [isValid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [checked, setChecked] = useState(false);

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
      setLoading(true);
      setChecked(true);
      const validationResult = await validationChecked(otp, checked);
      if (validationResult) {
        setValid(true);
        setResult(validationResult);
        navigation.navigate("Home");
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResult(null);
    } finally {
      setLoading(false);
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
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Pressable
              style={[styles.checkboxBase, checked && styles.checkboxChecked]}
              onPress={() => {
                setChecked(!checked);
              }}
            >
              {checked && <Ionicons name="checkmark" size={24} color="white" />}
            </Pressable>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: "justify" }}>
                {constants.register.kebijakan}
              </Text>
              <Text style={{ color: "#852884", fontWeight: "bold" }}>
                Kebijakan Privasi Syariah
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#852884",
              borderRadius: 10,
              marginTop: 24,
              padding: 16,
            }}
            disabled={loading}
            onPress={handleClick}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Kirim OTP
            </Text>
          </TouchableOpacity>
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" />
            </View>
          )}
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
  loading: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    position: "absolute",
    marginTop: 300,
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
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 5,
    borderColor: "#852884",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#852884",
  },
});

export default RegisterScreen;
