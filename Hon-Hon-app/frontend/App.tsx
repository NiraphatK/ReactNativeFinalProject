// Import necessary components and libraries
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Navigator";

import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/redux-toolkit/store";
import React from "react";

// Main app component
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* Status bar styling */}
          <StatusBar style="auto" />
          {/* Navigation setup */}
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
