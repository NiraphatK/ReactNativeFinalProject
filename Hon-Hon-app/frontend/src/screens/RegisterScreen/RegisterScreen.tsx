// Import necessary components and libraries
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { RegisterScreenNavigationProp } from "../../types/types";

import styles from "./RegisterScreenStyles";
import colors from "../../styles/color";

const RegisterScreen = (): React.JSX.Element => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword((prev) => !prev);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword((prev) => !prev);
    }
  };

  const handleRegister = async () => {
    // test
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);

    const userData = { username, email, password };
    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/users/register",
        userData
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <LinearGradient
      colors={[
        colors.backgroundSecondary,
        colors.backgroundSecondary,
        colors.primary,
        colors.primary,
      ]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Ionicons name="chevron-back" size={30} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Create Account</Text>

          {/* Input Username */}
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

          {/* Input Email */}
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.inputIcon} disabled>
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/* Input Password */}
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility("password")}
              style={styles.inputIcon}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/* Input Confirm Password */}
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={colors.textSecondary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility("confirmPassword")}
              style={styles.inputIcon}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerLine}>
            <View style={styles.line}></View>
            <Text
              style={[
                styles.text,
                styles.marginHorizontal,
                { color: colors.primary },
              ]}
            >
              OR
            </Text>
            <View style={styles.line}></View>
          </View>

          {/* Social Media Sign-In Options */}
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

          {/* Register Button */}
          <TouchableOpacity onPress={handleRegister} style={styles.nextButton}>
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

export default RegisterScreen;
