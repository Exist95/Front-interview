import { atom } from "recoil";
import { IQuestionRes, IWrongAnswer } from "../types/questions";

export const countState = atom<number>({
  key: "countState",
  default: 1,
});

export const scoreState = atom<number>({
  key: "scoreState",
  default: 0,
});

export const qRandomNumState = atom<number[]>({
  key: "qRandomNumState",
  default: [],
});

export const aRandomNumState = atom<number[]>({
  key: "aRandomNumState",
  default: [],
});

export const answersArrState = atom<number[]>({
  key: "answersArrState",
  default: [],
});

export const wrongAnswersArrState = atom<IWrongAnswer[]>({
  key: "wrongAnswersArrState",
  default: [],
});
