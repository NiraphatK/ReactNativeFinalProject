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
    height:750,
    backgroundColor: "#ffffff",
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingTop: 100,
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
  subtitle: {
    fontSize: 28,
    paddingTop: 50,
  },
  containerInput: {
    position: "relative",
    width: "100%",
    marginTop: 20,
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
  text: {
    marginTop: 15,
    color: colors.textSecondary,
    fontWeight: "500",
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
  errorText: {
    color: colors.accent,
    fontSize: 12,
    margin:0,
    padding:0
  },
  errorTextInput: {
    color: colors.accent,
    fontSize: 12,
    marginLeft:30,
    marginTop:4,
    padding:0
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
