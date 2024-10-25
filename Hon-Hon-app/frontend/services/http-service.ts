import axios, { AxiosResponse, AxiosError } from "axios";

const http = axios.create({
  baseURL: "http://10.0.2.2:5000", // กำหนด base URL
  headers: { "Content-Type": "application/json" },
});

export { http };

export type { AxiosResponse, AxiosError };