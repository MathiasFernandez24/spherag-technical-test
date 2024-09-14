import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../theme/colors";
import { fontStyles } from "../../theme/fonts.styles";
import { TextCoustomProps } from "./TextCoustom.type";

const TextCoustom = (props: TextCoustomProps) => {
  const {
    text,
    fontStyle,
    numberOfLines = 0,
    onPress,
    textColor = colors.Text.default,
    styles,
  } = props;

  const textFontStyle: {} = fontStyles[fontStyle];

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <Text
        numberOfLines={numberOfLines}
        style={{ ...textFontStyle, color: textColor, ...styles }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default TextCoustom;
