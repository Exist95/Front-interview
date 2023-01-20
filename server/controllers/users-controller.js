// const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

//id 프로퍼티는 필요없다. MongoDB가 자동으로 부여해주기 떄문에
// const DUMMEY_USER = [
//   {
//     id: "ul",
//     name: "max",
//     email: "test@test.com",
//     pasword: "qweqwe",
//   },
// ];

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

//회원가입
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      res
        .status(422)
        .json({ message: "Invalid inputs passed, please check your data." })
    );
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = res.status(500).json({
      message: "Signing up failed, please try again later.",
    });
    return next(error);
  }

  if (existingUser) {
    const error = res.status(422).json({
      message: "User exists already, please login instead.",
    });
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    image: "qweqwe",
    totalPoint: 0,
    game: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = res.status(500).json({
      message: "Signing up failed, please try again later.",
    });
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

//로그인
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMEY_USER.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.pasword !== password) {
    throw new HttpError("Could not identify user", 401);
  }

  res.json({ message: "Logged in" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
