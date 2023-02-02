import { BASE_PATH } from "@env";
import axios from "axios";

export const getUsers = async () => {
  const data = await axios.get(`${BASE_PATH}/api/users`);
  return data;
};
