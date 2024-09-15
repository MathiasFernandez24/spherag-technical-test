import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./CardContainer.styles";
import { CardContainerProps } from "./CardContainer.type";

const CardContainer = (props: CardContainerProps) => {
  const { onPress, styleContainer, children } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={{ ...styles.container, ...styleContainer }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CardContainer;
