import React from "react";
import { View, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
import { AllIconNamesTypes, allIcons } from "./IconIndex";
import { IconsProps } from "./IconProps.type";

interface iconProps extends IconsProps {
  iconName: AllIconNamesTypes;
  containerStyles?: ViewStyle;
}
export default function Icon(props: iconProps) {
  const {
    iconName,
    color = colors.neutral.default,
    size = 24,
    containerStyles,
  } = props;
  return (
    <View style={containerStyles}>{allIcons[iconName]({ color, size })}</View>
  );
}
