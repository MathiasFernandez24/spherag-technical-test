import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
const Separator = () => {
  return (
    <View style={{ height: 1, backgroundColor: colors.neutral.lighter }} />
  );
};

export default Separator;

const styles = StyleSheet.create({});
