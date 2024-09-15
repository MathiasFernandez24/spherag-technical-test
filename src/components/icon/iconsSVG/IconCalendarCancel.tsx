import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconsProps } from "../IconProps.type";

const IconCalendarCancel = (props: IconsProps) => {
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
      <Path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
      <Path d="M16 3v4" />
      <Path d="M8 3v4" />
      <Path d="M4 11h16" />
      <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <Path d="M17 21l4 -4" />
    </Svg>
  );
};

export default IconCalendarCancel;
