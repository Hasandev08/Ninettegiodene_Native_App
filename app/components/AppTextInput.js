import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppTextInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: "row",
    width: "90%",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  textInput: {},
});

export default AppTextInput;
