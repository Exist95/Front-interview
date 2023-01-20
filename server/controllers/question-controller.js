const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");

const DUMMEY_QUESTION = [
  {
    allQuestion: [
      {
        id: 1,
        question: "리액트는 중요한가요요요요요?",
        answer: "아니요ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ",
      },
      {
        id: 2,
        question: "자바스크립트는 중요한가요?",
        answer: "아닐껄요?",
      },
      {
        id: 3,
        question: "백엔드 어렵네요",
        answer: "그러게요",
      },
    ],
  },
];

const getQuestion = async (req, res, next) => {
  res.json({ question: DUMMEY_QUESTION });
};

exports.getQuestion = getQuestion;
