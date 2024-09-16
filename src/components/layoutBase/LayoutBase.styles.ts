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
    zIndex: 1,
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
  logoutHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutContainer: { padding: 30, gap: 16 },
});
