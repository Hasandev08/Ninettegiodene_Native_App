import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import PreviousButton from "../components/PreviousButton";
import FormText from "../components/FormText";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function SignUpScreen(props) {
  return (
    <>
      <PreviousButton />
      <FormText title="SignUp" subTitle="Let's explore your dream house" />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              keyboardType="email-address"
              placeholder="Enter your email"
            />
            <AppText style={styles.text}>
              You will receive a confirmation email. Click to verify
            </AppText>
            <ImageBackground
              resizeMode="stretch"
              style={styles.container}
              source={require("../assets/login.png")}
            >
              <View style={styles.buttons}>
                <AppButton title="Next" onPress={handleSubmit} />
                <AppButton title="Already have an account?" color="theme" />
              </View>
            </ImageBackground>
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    paddingBottom: 35,
    bottom: 0,
    top: 60,
  },
  buttons: {
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  text: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 12,
  },
});

export default SignUpScreen;
