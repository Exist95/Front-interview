export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignUpRes {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    totalPoint: number;
    wrongAnswer: string[];
    __v: number;
    id: string;
  };
}

export interface ILoginRes {
  userId: string;
  email: string;
  token: string;
}
