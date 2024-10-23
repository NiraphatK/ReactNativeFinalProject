import { AxiosResponse } from "axios";
import { http } from "./http-service";

export async function checkUserPassword(username:string,password:string): Promise<AxiosResponse<any>> {
  try {
    
    const response = await http.post<any>(
      "http://10.0.2.2:5000/users/login",{username:username,password:password}
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function createUser(userData:any): Promise<AxiosResponse<any>> {
  try {
    const response = await http.post<any>(
      "http://10.0.2.2:5000/users/register",userData
    );
    return response;
  } catch (error) {
    throw error;
  }
}

