import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    color: colors.Text.default,
    fontSize: 24,
    flex: 1,
  },
  iconContainerStyles: { marginEnd: 8 },
});
