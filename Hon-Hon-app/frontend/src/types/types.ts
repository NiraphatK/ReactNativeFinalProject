// Import necessary components and libraries
import { StackNavigationProp } from "@react-navigation/stack";

interface Profile {
  title: string;
  category: string;
  image: string;
  duration: number;
}

// Define a type for your stack navigator
export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  Home: { timeData: string } | undefined;
  createProfile: undefined;
  Timer: { data: Profile,index: number };
  Initial: undefined;
};

// Define a type for the navigation prop for each screen
export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;
export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type createProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "createProfile"
>;
export type TimerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Timer"
>;
export type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Initial"
>;
