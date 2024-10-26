import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
} from "../../redux-toolkit/auth/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WelcomeScreenNavigationProp } from "../../types/types";

const InitialScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const { isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const chkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const onLogin = await AsyncStorage.getItem("@Username");
      if (onLogin) {
        dispatch(setIsLogin(true));
        navigation.navigate("Home");
      } else {
        navigation.navigate("Welcome");
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handlePlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      setIsVideoFinished(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isVideoFinished) {
        chkLogin();
      }
    }, [isVideoFinished])
  );

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/images/sl.mp4")}
        style={styles.video}
        resizeMode={"cover" as any}
        isLooping={false}
        shouldPlay
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default InitialScreen;
