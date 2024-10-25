import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { WelcomeScreenNavigationProp } from "../../types/types";
import styles from "./WelcomeScreenStyles";
import colors from "../../styles/color";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
} from "../../redux-toolkit/auth/auth-slice";
import { checkUserPassword } from "../../../services/product-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const { isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  // ถ้าล็อกอินอยู่แล้ว ให้ return เป็น null (ไม่ต้องแสดงอะไร)
  return (
    <>
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
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/icon.png")}
            />
          </View>
          <Text style={styles.title}>Hon Hon</Text>
          <Text style={styles.subtitlePrimary}>本本</Text>
          <Text style={[styles.subtitle, styles.paddingVertical]}>
            Welcome!
          </Text>

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Login")}
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

          <Text style={styles.text}>Sign in with another account</Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default WelcomeScreen;
