import { BASE_PATH } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_PATH,
});
