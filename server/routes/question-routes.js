const express = require("express");
const { check } = require("express-validator");

const questionCotroller = require("../controllers/question-controller");

const router = express.Router();

router.get("/", questionCotroller.getQuestion);

router.post(
  "/",
  [
    check("question").not().isEmpty(),
    check("answer").not().isEmpty(),
    check("part").not().isEmpty(),
  ],
  questionCotroller.createQuestion
);

module.exports = router;
