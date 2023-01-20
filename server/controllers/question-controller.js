const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const Question = require("../models/question");

// const DUMMEY_QUESTION = [
//   {
//     question: "리액트는 중요한가요요요요요?",
//     answer: "아니요ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ",
//     part: "react",
//   },
// ];

const getQuestion = async (req, res, next) => {
  let allUser;
  try {
    allUser = await Question.findAll();
  } catch (err) {
    const error = res.status(500).json({
      message: "Something went wrong, could not find a question",
    });
    return next(error);
  }
  res.json({ allUser: allUser.toObject({ geteers: true }) });
};

const createQuestion = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { question, answer, part } = req.body;

  const createdQuestion = new Question({
    question,
    answer,
    part,
  });

  try {
    await createdQuestion.save();
  } catch (err) {
    const error = res.status(500).json({
      message: "Creating question failed, please try again.",
    });
    return next(error);
  }
  res.status(201).json({ question: createQuestion });
};

exports.getQuestion = getQuestion;
exports.createQuestion = createQuestion;
