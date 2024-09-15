import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  containerAtlas: {
    margin: 8,
    padding: 8,
    gap: 0,
    borderWidth: 1,
    borderColor: colors.neutral.lighter,
    borderRadius: 8,
  },
  connectorsCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
