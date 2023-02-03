import { BASE_PATH } from "@env";
import axios from "axios";
import { IResultParams } from "../types/result";

export const getQuestions = async () => {
  const response = await axios.get(`${BASE_PATH}/api/question`);
  return response.data.questions;
};

export const patchResult = async (params: IResultParams) => {
  return await axios.patch(
    `${BASE_PATH}/api/users/${params.id}`,
    {
      totalPoint: params.totalPoint,
      wronganswer: params.wrongAnswer,
    },
    {
      headers: {
        Authorization: `Bearer ${params.userToken}`,
      },
    }
  );
};
