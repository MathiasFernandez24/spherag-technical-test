import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonBase.styles";
import { ButtonBaseType } from "./ButtonBase.type";

const ButtonBase = (props: ButtonBaseType) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBase;
