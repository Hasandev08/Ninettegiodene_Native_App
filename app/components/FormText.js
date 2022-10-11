import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";

function FormText({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
  },
});

export default FormText;
