import { IWrongAnswer } from "./questions";

export interface IResultParams {
  id: string;
  totalPoint: number;
  wrongAnswer: IWrongAnswer[];
  userToken: string;
}
