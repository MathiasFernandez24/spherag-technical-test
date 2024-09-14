import { ViewStyle } from "react-native";
import { AllIconNamesTypes } from "./IconIndex";

//Rest of icons
export interface IconsProps {
  color?: string;
  size?: 16 | 20 | 24 | 32;
}
//Main Icon
export interface iconProps extends IconsProps {
  iconName: AllIconNamesTypes;
  containerStyles?: ViewStyle;
  onPress?: () => void;
}
