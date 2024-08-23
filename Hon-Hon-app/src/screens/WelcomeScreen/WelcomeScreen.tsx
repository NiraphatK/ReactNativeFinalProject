// Import necessary components and libraries
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import { WelcomeScreenNavigationProp } from "../../types/types";

import styles from "./WelcomeScreenStyles";
import colors from "../../styles/color";

// Define props for WelcomeScreen
type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }): React.JSX.Element => {
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
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/icon.png")}
          />
        </View>
        <Text style={styles.title}>Hon Hon</Text>
        <Text style={styles.subtitlePrimary}>本本</Text>
        <Text style={[styles.subtitle, styles.paddingVertical]}>Welcome !</Text>

        {/* Create Account  Button */}
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => {
            /* Handle Create Account press */
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            /* Handle login press */
            navigation.navigate("Login");
          }}
        >
          <Text style={[styles.buttonText, { color: colors.primary }]}>
            Login
          </Text>
        </TouchableOpacity>

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

        <Text style={{ color: colors.textSecondary }}>
          Sign in with another account
        </Text>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
