import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { LoginScreenNavigationProp } from "../../types/types";

import colors from "../../styles/color";
import styles from "./LoginScreenStyles";

const LoginScreen = (): React.JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
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
    </LinearGradient>
  );
};

export default LoginScreen;
