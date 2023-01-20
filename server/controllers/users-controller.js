const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const DUMMEY_USER = [
  {
    id: "ul",
    name: "max",
    email: "test@test.com",
    pasword: "qweqwe",
  },
];

const getUsers = (req, res, next) => {
  res.json({ user: DUMMEY_USER });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  DUMMEY_USER.push(createdUser);

  res.status(201).json({ user: createdUser });
};

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
