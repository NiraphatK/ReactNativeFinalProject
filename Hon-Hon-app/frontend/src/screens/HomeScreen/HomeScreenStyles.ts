import { StyleSheet } from "react-native";

import colors from "../../styles/color";

// Define and export styles for WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
    // backgroundColor: colors.primary,
    // justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    width: "100%",
    height: 550,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 60,
    alignItems: 'center',
    position: "relative",
    padding: 40,
    paddingTop: 30,
    elevation: 5,
    overflow: 'hidden'
    // left:-205,
    // top:-250,
  },
  logoContainer: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.background,
  },
  scrollView: {
    // flexGrow:1,
    paddingTop: 110,
    paddingBottom: 10,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 20,
    padding: 1,
    zIndex: 1,
  },
  circleButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40
  },
  contentTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.secondary,
  },
  subContentTitle: {
    color: colors.textSecondary,
  },
  cardProfile: {
    width: '100%',
    height: 120,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.backgroundComponent,
    marginBottom: 10,
    paddingHorizontal:20,
    borderRadius:15
  },
  ImgProfile:{
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.base,
    borderRadius:40,
  },
  textProfile:{
    color:colors.background,
    fontSize:30,
    fontWeight:'bold'
  },
  textPrimaryProfile:{
    color:colors.secondary,
    fontWeight:'bold',
    fontSize:18
  },
  textSecondaryProfile:{
    color:colors.secondary,
    fontWeight:'bold',
    fontSize:16
  },
  rowCategory:{
    flexDirection:'row',
    marginTop:7
  },
  category:{
    width:65,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.secondary,
    borderRadius:20,
    marginRight:5
  },
  textCategory:{
    color:colors.background,
    fontSize:12
  },
  overView: { 
    width: '100%', 
    height: 180, 
    backgroundColor: colors.backgroundComponent ,
    borderRadius:15,
    overflow:'hidden'
  }
});

export default styles;
