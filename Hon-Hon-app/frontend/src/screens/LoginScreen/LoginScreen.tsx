import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { LoginScreenNavigationProp } from "../../types/types";

import colors from "../../styles/color";
import styles from "./LoginScreenStyles";
import { checkUserPassword } from "../../../services/product-service";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { setIsLogin } from "../../redux-toolkit/auth/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const LoginScreen = (): React.JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    // test

    try {
      const res = await checkUserPassword(username, password);
      console.log(res);

      if (res.status === 200 && res) {
        await AsyncStorage.setItem("@Username", username);
        dispatch(setIsLogin(true));
        navigation.navigate("Home");
        Toast.show({
          type:"success",
          text1:'Login Successfuly!!',
          text2:'Let\'s Hon Hon'
        })
      }
    } catch (error: any) {
      if (error.status === 404) {
        setShowModal(true);
      }
    }
  };
  return (
    // LinearGradient component for a gradient background
    <LinearGradient
      colors={[
        colors.backgroundSecondary,
        colors.backgroundSecondary,
        colors.primary,
        colors.primary,
      ]} // Gradient colors
      style={styles.container}
      start={{ x: 0, y: 0 }} // Gradient start point (top-left corner)
      end={{ x: 1, y: 1 }} // Gradient end point (bottom-right corner)
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Ionicons name="chevron-back" size={30} color={colors.background} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/icon.png")}
            />
          </View>
          <Text style={[styles.subtitle, styles.marginTop]}>
            Welcome back !
          </Text>

          {/* Input Username  */}
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={colors.textSecondary}
              value={username}
              onChangeText={setUsername}
            />
            <TouchableOpacity style={styles.inputIcon} disabled>
              <Ionicons
                name="person-outline"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/* Input Password  */}
          <View style={[styles.containerInput]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => {
                togglePasswordVisibility();
              }}
              style={styles.inputIcon}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>
            New User?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={[styles.text, { color: colors.primary }]}
            >
              Sign Up
            </Text>
          </Text>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
            <Text style={[styles.text, { color: colors.primary }]}>OR</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.signInLogoContainer}>
            <TouchableOpacity style={styles.signInLogoWrapper}>
              <Ionicons name="logo-facebook" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInLogoWrapper}>
              <Ionicons name="logo-google" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInLogoWrapper}>
              <Ionicons name="logo-twitter" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInLogoWrapper}>
              <Ionicons name="logo-discord" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Sign in with another account</Text>
          {/* Login Button */}
          <TouchableOpacity
            onPress={() => {
              handleLogin();
            }}
            style={styles.nextButton}
          >
            <Ionicons
              name="arrow-forward"
              size={50}
              color={colors.background}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.textHeader}>Invalid Credentials!</Text>
            <Text
              style={styles.textSub}
            >{`Login failed. Please check your username and password and try again.`}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowModal(!showModal);
              }}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default LoginScreen;
