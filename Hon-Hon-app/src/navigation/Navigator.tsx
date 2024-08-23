// Import necessary components and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types/types";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

// Create Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

// Define Navigator component
const Navigator: React.FC = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
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
    </Stack.Navigator>
  );
};

// Export Navigator component
export default Navigator;
