import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./LayoutBase.styles";
import { LayoutBaseType } from "./LayoutBase.Type";

const LayoutBase = (props: LayoutBaseType) => {
  const { children, scrollEnabled = true } = props;

  return (
    <>
      {scrollEnabled ? (
        <ScrollView style={styles.container}>{children}</ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </>
  );
};

export default LayoutBase;
