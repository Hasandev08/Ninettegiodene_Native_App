import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomBar from "../components/BottomBar";

import colors from "../config/colors";

function AccountScreen(props) {
  return (
    <View style={styles.bar}>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default AccountScreen;
