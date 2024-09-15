import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconsProps } from "../IconProps.type";

const IconBatteryOff = (props: IconsProps) => {
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
      <Path d="M3 3l18 18" />
      <Path d="M11 7h6a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5m-2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h1" />
    </Svg>
  );
};

export default IconBatteryOff;
