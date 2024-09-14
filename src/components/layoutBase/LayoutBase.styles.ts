import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.white,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: colors.primary.darker,
    padding: 16,
    paddingTop: 48,
    alignItems: "center",
    gap: 12,
  },
  headerTitlesContainer: {
    flex: 1,
    gap: 4,
  },
  spheragLogo: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 100,
    alignSelf: "center",
  },
});
