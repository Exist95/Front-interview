export interface IUserRes {
  _id: string;
  name: string;
  email: string;
  password: string;
  totalPoint: number;
  wrongAnswer: string[];
  __v: number;
  id: string;
}

export interface IUserFilterRes {
  id: string;
  name: string;
  totalPoint: number;
}

export interface IUserFilter {
  filterUserData: Array<IUserFilterRes>;
}
