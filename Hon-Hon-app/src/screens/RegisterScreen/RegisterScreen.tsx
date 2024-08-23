// Import necessary components and libraries
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./RegisterScreenStyles";
import colors from "../../styles/color";
import { RegisterScreenNavigationProp } from "../../types/types";

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
