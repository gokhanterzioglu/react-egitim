import { DATA_URL } from "./appConfig";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: DATA_URL,
  timeout: 10000
});