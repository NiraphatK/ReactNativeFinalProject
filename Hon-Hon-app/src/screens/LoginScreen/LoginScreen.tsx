import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../styles/color";
import styles from "./LoginScreenStyles";
import { LoginScreenNavigationProp } from "../../types/types";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = (): React.JSX.Element => {
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
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={colors.textSecondary}
            />
            <TouchableOpacity style={styles.inputIcon}>
              <Ionicons
                name="person-outline"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.containerInput]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.inputIcon}>
              <Ionicons
                name="eye-outline"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.marginTop, { color: colors.textSecondary }]}>
            New User? <Text style={{ color: colors.primary }}>Sign Up</Text>
          </Text>
          <Text style={[styles.marginTop, { color: colors.primary }]}>OR</Text>
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
          <Text style={[styles.marginTop, { color: colors.textSecondary }]}>
            Sign in with another account
          </Text>
          <TouchableOpacity style={[styles.nextButton, styles.marginTop]}>
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
