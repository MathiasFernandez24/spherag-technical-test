import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  containerView: {
    backgroundColor: colors.background.white,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 16,
    gap: 8,
    flex: 1,
  },
  titles: { alignSelf: "center" },
  spheragText: {
    width: 300,
    height: 60,
    resizeMode: "cover",
    borderRadius: 16,
    alignSelf: "center",
  },
  autoCompleteButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});
