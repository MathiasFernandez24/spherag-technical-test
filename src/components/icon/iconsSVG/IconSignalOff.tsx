import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconsProps } from "../IconProps.type";

const IconSignalOff = (props: IconsProps) => {
  const { color, size } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M6 18v-3" />
      <Path d="M10 18v-6" />
      <Path d="M14 18v-4" />
      <Path d="M14 10v-1" />
      <Path d="M18 14v-8" />
      <Path d="M3 3l18 18" />
    </Svg>
  );
};

export default IconSignalOff;
