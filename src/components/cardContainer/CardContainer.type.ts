import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type CardContainerProps = {
  children: ReactNode;
  onPress?: () => void;
  styleContainer?: ViewStyle;
};
