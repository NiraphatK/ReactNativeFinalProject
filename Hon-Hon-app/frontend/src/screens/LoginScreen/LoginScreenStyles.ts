import { StyleSheet } from "react-native";

import colors from "../../styles/color";

// Define and export styles for WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.primary,
    // justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 60,
    alignItems: "center",
    position: "relative",
    padding: 40,
    paddingTop: 80,
    elevation: 5,
    // left:-205,
    // top:-250,
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
  paddingVertical: {
    paddingVertical: 10,
  },
  containerInput: {
    position: "relative",
    width: "100%",
    marginTop: 25,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 30,
    paddingRight: 20,
    borderRadius: 30,
    backgroundColor: colors.backgroundComponent,
  },
  inputIcon: {
    position: "absolute",
    top: 14,
    right: 15,
  },
  signInLogoWrapper: {
    padding: 5,
    // borderWidth: 1,
    // borderColor: colors.primary,
    // borderRadius: 10,
  },
  signInLogoContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    width:200,
    backgroundColor: colors.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    justifyContent:'center'
  },
  closeButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  textHeader:{
    fontSize:30,
    fontWeight: "bold",
    marginBottom:10,
    color:colors.background
  },
  textSub:{
    fontSize:15,
    color:colors.background
  },
  nextButton: {
    marginTop: 25,
    backgroundColor: colors.base,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
  },
  marginTop: {
    marginTop: 15,
  },
  scrollView: {
    // flexGrow:1,
    paddingTop: 160,
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
  text: {
    marginTop: 15,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  containerLine:{
    flexDirection:'row',
    alignItems:'center'
  },
  line: {
    marginTop:15,
    height: 1,
    backgroundColor: colors.textSecondary,
    marginHorizontal: 15,
    width: 135,
  },
});

export default styles;
