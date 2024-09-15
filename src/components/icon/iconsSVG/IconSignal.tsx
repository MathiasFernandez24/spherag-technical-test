import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconsProps } from "../IconProps.type";

const IconSignal = (props: IconsProps) => {
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
      <Path d="M6 18l0 -3" />
      <Path d="M10 18l0 -6" />
      <Path d="M14 18l0 -9" />
      <Path d="M18 18l0 -12" />
    </Svg>
  );
};

export default IconSignal;
