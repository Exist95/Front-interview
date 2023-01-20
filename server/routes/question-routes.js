const express = require("express");
const { check } = require("express-validator");

const questionCotroller = require("../controllers/question-controller");

const router = express.Router();

router.get("/", questionCotroller.getQuestion);

module.exports = router;
