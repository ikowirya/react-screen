import React from "react";
import { ScrollView, ImageBackground, StyleSheet } from "react-native";

const ParentComponent = ({ children }) => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/icon_background.png")}
      >
        {children}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 850,
    resizeMode: "cover",
  }
});

export default ParentComponent;
