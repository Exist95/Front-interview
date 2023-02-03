export interface IQuestionRes {
  _id: string;
  question: string;
  answer: string;
  part: string;
  __v: number;
}

export interface IWrongAnswer {
  question: string;
  answer: string;
  part: string;
}
