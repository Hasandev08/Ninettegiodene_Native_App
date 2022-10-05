import React from "react";
import { Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={style}>{children}</Text>;
}

export default AppText;
