// Import necessary components and libraries
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../../services/product-service";
import * as yup from "yup";
import styles from "./RegisterScreenStyles";
import colors from "../../styles/color";
import Toast from "react-native-toast-message";

// Validation schema using Yup
export const validationSchema = yup.object().shape({
  username: yup.string().required("Field cannot be empty."),
  email: yup
    .string()
    .required("Field cannot be empty.")
    .email("The email format is invalid."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Field cannot be empty."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Field cannot be empty."),
});

const RegisterScreen = (): React.JSX.Element => {
  // States
  const navigation = useNavigation();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  // Toggle visibility of password
  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleRegister = async () => {
    setModalMessage("");

    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
      setModalMessage("Field cannot be empty.");
      setShowModal(true);
      return; // Exit early
    }

    // Validate formats using Yup schema
    try {
      await validationSchema.validate(
        {
          username,
          email,
          password,
          confirmPassword,
        },
        { abortEarly: false }
      );

      // Proceed with registration if validation passes
      const userData = { username, email, password };

      try {
        await createUser(userData);
        Toast.show({
          type:"success",
          text1:'Register Successfuly!!',
          text2:'Let\'s Join with us'
        })
        navigation.goBack();
      } catch (error: any) {
        if (error.response?.status === 400 || error.response?.status === 500) {
          setModalMessage(
            "This email or username is already in use."
          );
        } else {
          setModalMessage(
            "An unexpected error occurred. Please try again later."
          );
        }
        setShowModal(true);
      }
    } catch (validationErrors) {
      // Handle validation errors
      if (validationErrors instanceof yup.ValidationError) {
        // Extract and format error messages
        const errorMessages = validationErrors.errors.join("\n"); // Join multiple error messages
        setModalMessage(errorMessages);
        setShowModal(true);
      }
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

      {/* Modal for Error Messages */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)} 
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.textHeader}>Warning!</Text>
            <Text style={styles.textSub}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default RegisterScreen;
