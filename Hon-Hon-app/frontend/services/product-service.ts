import { AxiosResponse } from "axios";
import { http } from "./http-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkUserPassword(username: string, password: string): Promise<AxiosResponse<any>> {
  try {
    const response = await http.post<any>("users/login", { username, password });
    return response;
  } catch (error) {
    // console.error("Error logging in:", error);
    throw error;
  }
}

export async function createUser(userData: any): Promise<AxiosResponse<any>> {
  try {
    const response = await http.post<any>("users/register", userData);
    return response;
  } catch (error) {
    // console.error("Error creating user:", error);
    throw error;
  }
}

export async function getProfile(): Promise<AxiosResponse<any>> {
  try {
    const userId = await AsyncStorage.getItem('@Username');
    const response = await http.get<any>(`api/profile/${userId}`);
    return response;
  } catch (error) {
    // console.error("Error creating user:", error);
    throw error;
  }
}

export async function updateFocusTime(time: number,index:number): Promise<AxiosResponse<any>> {
  try {
    const userId = await AsyncStorage.getItem('@Username');

    const response = await http.post<any>('update/duration', {userId,time,index});
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function insertProfile(formData: any): Promise<AxiosResponse<any>> {
  try {
      const userId = await AsyncStorage.getItem('@Username');
      const response = await http.post(`/upload/${userId}`, formData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      return response;
  } catch (error) {
      console.error("Error inserting profile:", error);
      throw error;
  }
}
