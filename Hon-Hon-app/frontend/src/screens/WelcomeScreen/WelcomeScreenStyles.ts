import { StyleSheet } from "react-native";

import colors from "../../styles/color";

// Define and export styles for WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 100,
    alignItems: "center",
    position: "relative",
    padding: 40,
    paddingTop: 80,
    elevation: 5,
  },
  logoContainer: {
    position: "absolute",
    top: -85,
    borderRadius: 30,
    elevation: 10, // Android-only shadow effect
    backgroundColor: colors.primary,
  },
  logo: {
    width: 135,
    height: 135,
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 28,
  },
  subtitlePrimary: {
    fontSize: 28,
    color: colors.primary,
  },
  buttonCreate: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonLogin: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  signInLogoWrapper: {
    marginTop: 10,
    padding: 5,
    // borderWidth: 1,
    // borderColor: colors.primary,
    // borderRadius: 10,
  },
  signInLogoContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  text: {
    color: colors.textSecondary,
    fontWeight: "500",
  },
});

export default styles;
