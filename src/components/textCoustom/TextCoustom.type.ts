import { TextStyle } from "react-native";
import { fontStyles } from "../../theme/fonts.styles";

export type TextCoustomProps = {
  text: string;
  textColor?: string;
  fontStyle: keyof typeof fontStyles;
  numberOfLines?: number;
  onPress?: () => void;
  styles?: TextStyle;
};
