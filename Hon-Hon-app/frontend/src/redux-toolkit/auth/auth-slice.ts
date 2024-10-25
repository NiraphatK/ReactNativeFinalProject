import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AuthState {
  isLogin: boolean;
  isLoading: boolean;
  // username: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
  // username: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // like function to action
    setIsLogin(state, action: PayloadAction<any | null>) {
      state.isLogin = action.payload; // update global state
    },
    setIsLoading(state, action: PayloadAction<any | null>) {
      state.isLoading = action.payload; // update global state
    },
    // setUsername: (state, action: PayloadAction<string>) => {
    //   state.username = action.payload;
    // },
  },
});

export const { setIsLoading, setIsLogin } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authState;

export default authSlice.reducer;
