import { StyleSheet } from "react-native";

import colors from "../../styles/color";

// Define and export styles for WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 60,
    alignItems: "center",
    padding: 40,
    elevation: 5,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 775,
    paddingBottom: 10,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 15,
    padding: 1,
    zIndex: 1,
  },
  subtitle: {
    fontSize: 28,
    paddingTop: 50,
  },
  text: {
    marginTop: 15,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  nextButton: {
    marginTop: 25,
    backgroundColor: colors.base,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
  },
  marginHorizontal: {
    marginTop: 20,
    marginBottom: 5,
  },
});

export default styles;
