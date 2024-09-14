import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { allIcons } from "./IconIndex";
import { iconProps } from "./IconProps.type";

export default function Icon(props: iconProps) {
  const {
    iconName,
    color = colors.neutral.default,
    size = 24,
    containerStyles,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={!onPress}
      hitSlop={24}
    >
      {allIcons[iconName]({ color, size })}
    </TouchableOpacity>
  );
}
