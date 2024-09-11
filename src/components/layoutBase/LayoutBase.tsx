import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./LayoutBase.styles";
import { LayoutBaseType } from "./LayoutBase.Type";

const LayoutBase = (props: LayoutBaseType) => {
  const { children } = props;
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default LayoutBase;
