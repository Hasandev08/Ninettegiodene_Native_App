import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import PreviousButton from "../components/PreviousButton";
import FormText from "../components/FormText";
import AppButton from "../components/AppButton";

function SignUpScreen(props) {
  return (
    <>
      <PreviousButton />
      <FormText title="SignUp" subTitle="Let's explore your dream house" />
      <ImageBackground
        resizeMode="contain"
        style={styles.container}
        source={require("../assets/login.png")}
      >
        <View style={styles.buttons}>
          <AppButton title="Next" />
          <AppButton title="Already have an account?" color="theme" />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttons: {
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
});

export default SignUpScreen;
