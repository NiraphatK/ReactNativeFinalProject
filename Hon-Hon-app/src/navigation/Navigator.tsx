// Import necessary components and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

// Create Stack Navigator
const Stack = createStackNavigator();

// Define Navigator component
const Navigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* Welcome screen */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Export Navigator component
export default Navigator;
