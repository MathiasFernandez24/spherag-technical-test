import React from "react";
import { Pressable, Text } from "react-native";
import { colors } from "../../theme/colors";
import { fontStyles } from "../../theme/fonts.styles";
import { TextCoustomProps } from "./TextCoustom.type";

const TextCoustom = (props: TextCoustomProps) => {
  const {
    text,
    fontStyle = "S_Normal",
    numberOfLines = 0,
    onPress,
    textColor = colors.Text.default,
    textStyles,
    containerStyles,
  } = props;

  const textFontStyle: {} = fontStyles[fontStyle];

  return (
    <Pressable onPress={onPress} disabled={!onPress} style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={{ ...textFontStyle, color: textColor, ...textStyles }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default TextCoustom;
