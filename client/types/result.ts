import { IWrongAnswer } from "./questions";

export interface IResultParams {
  id: string;
  totalPoint: string;
  wrongAnswer: IWrongAnswer[];
  userToken: string;
}
