import { BASE_PATH } from "@env";
import axios from "axios";
import { IPwParams } from "../types/password";

export const changePassword = async (params: IPwParams) => {
  return await axios.patch(
    `${BASE_PATH}/api/users/${params.id}`,
    {
      password: params.password,
    },
    {
      headers: {
        Authorization: `Bearer ${params.userToken}`,
      },
    }
  );
};
