// Import necessary components and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types/types";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CreateProfileScreen from "../screens/HomeScreen/CreateProfileScreen";

// Create Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

// Define Navigator component
const Navigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Welcome screen */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      {/* Register screen */}
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      {/* Login screen */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="createProfile"
        component={CreateProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Export Navigator component
export default Navigator;
