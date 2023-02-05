const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//모든 유저 호출
const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = res
      .status(500)
      .json({ message: "Fetching users failed, please try again later." });

    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

//특정 유저 호출
const getUser = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch {
    const error = res
      .status(500)
      .json({ message: "Something went wrong, could not find a user." });
    return next(error);
  }

  if (!user) {
    const error = res
      .status(404)
      .json({ message: "Could not find user for the provided id." });
    return next(error);
  }
  res.json({ user: user.toObject({ getters: true }) });
};

//특정 유저 탈퇴
const deleteUser = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findByIdAndDelete(userId);
  } catch {
    const error = res
      .status(500)
      .json({ message: "Something went wrong, could not find a user." });
    return next(error);
  }
  if (!user) {
    const error = res
      .status(404)
      .json({ message: "Could not find user for the provided id." });
    return next(error);
  }
  res.status(201).json({ message: "success deleted user" });
};

//유저 정보 업데이트
const updateUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      res
        .status(422)
        .json({ message: "Invalid inputs passed, please check your data." })
    );
  }

  const { password, totalPoint, wrongAnswer } = req.body;
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch {
    const error = res
      .status(500)
      .json({ message: "Something went wrong, could not find a user." });
    return next(error);
  }

  if (!user) {
    const error = res
      .status(404)
      .json({ message: "Could not find user for the provided id." });
    return next(error);
  }

  let prePoint = user.totalPoint;

  if (!totalPoint) {
    user.password = password;

    try {
      await user.save();
    } catch {
      const error = res
        .status(500)
        .json({ message: "Something went wrong, could not update" });
      return next(error);
    }
  } else if (totalPoint && wrongAnswer) {
    user.totalPoint = prePoint + totalPoint;
    user.wrongAnswer = [...user.wrongAnswer, ...wrongAnswer];
    try {
      await user.save();
    } catch {
      const error = res
        .status(500)
        .json({ message: "Something went wrong, could not update" });
      return next(error);
    }
    // } else if (totalPoint && !password && !wrongAnswer) {
    //   user.totalPoint = totalPoint;
    //   try {
    //     await user.save();
    //   } catch {
    //     const error = res
    //       .status(500)
    //       .json({ message: "Something went wrong, could not update totalPoint" });
    //     return next(error);
    //   }
    // } else if (!totalPoint && !password && wrongAnswer) {
    //   user.wrongAnswer.push(wrongAnswer);
    //   try {
    //     await user.save();
    //   } catch {
    //     const error = res
    //       .status(500)
    //       .json({
    //         message: "Something went wrong, could not update wrongAnswer",
    //       });
    //     return next(error);
    //   }
  }

  res.status(201).json({ message: "The user was successfully changed." });
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

  //유저 이메일 확인
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

  // 비밀번호 암호화
  // let hashedPassword;
  // try {
  //   hashedPassword = await bcrypt.hash(password, 12);
  // } catch (err) {
  //   const error = res.status(500).json({
  //     message: "Could not create user, please try again.",
  //   });
  //   return next(error);
  // }

  const createdUser = new User({
    name,
    email,
    password,
    totalPoint: 0,
    wrongAnswer: [],
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
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = res
      .status(500)
      .json({ message: "Logging in failed, please try again later." });
    return next(error);
  }

  if (!existingUser) {
    const error = res
      .status(403)
      .json({ message: "Invalid credentials, could not log you in." });

    return next(error);
  }

  // let isValidPassword = false;
  // try {
  //   //compare - 평문 비밀번호를 인수 받는다.
  //   isValidPassword = await bcrypt.compare(password, existingUser.password);
  // } catch (err) {
  //   const error = res.status(500).json({
  //     message:
  //       "Could not log you in, please check your credentials and try again.",
  //   });

  //   return next(error);
  // }

  // if (!isValidPassword) {
  //   const error = res
  //     .status(403)
  //     .json({ message: "Invalid credentials, could not log you in." });

  //   return next(error);
  // }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      `${process.env.JWT_KEY}`,
      { expiresIn: "2200h" }
    );
  } catch (err) {
    const error = res
      .status(500)
      .json({ message: "Logging in failed, please try again later." });
    return next(error);
  }

  res.status(201).json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.signup = signup;
exports.login = login;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
