import { BASE_PATH } from "@env";
import axios from "axios";

export const getQuestions = async () => {
  const response = await axios.get(`${BASE_PATH}/api/question`);
  return response.data.questions;
};

// export const patchResult = async (params) => {
//   return await axios.patch(`${BASE_PATH}/api/users/${params.id}`, {
//     totalPoint: "",
//     wrongAnswer: { question: "", asnwer: "", part: "" },
//   });
// };
