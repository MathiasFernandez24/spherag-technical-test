import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { separatorProps } from "./Separator.type";
const Separator = (props: separatorProps) => {
  const {
    marginHorizontal = 0,
    marginVertical = 0,
    color = colors.neutral.lighter,
  } = props;
  return (
    <View
      style={{
        height: 1,
        backgroundColor: color,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
      }}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({});
