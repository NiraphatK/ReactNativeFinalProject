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
  
  import { HomeScreenNavigationProp } from "../../types/types";
  
  import styles from "./HomeScreenStyles";
  import colors from "../../styles/color";
  

const HomeScreen = (): React.JSX.Element => {
  return (
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
        
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
