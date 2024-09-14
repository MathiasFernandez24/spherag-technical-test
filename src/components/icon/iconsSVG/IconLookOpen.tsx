import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconsProps } from "../IconProps.type";

const IconLookOpen = (props: IconsProps) => {
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
      <Path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
      <Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <Path d="M8 11v-5a4 4 0 0 1 8 0" />
    </Svg>
  );
};

export default IconLookOpen;
