const express = require("express");

const router = express.Router();

router.get("/api/user", (req, res, next) => {
  console.log("GET Requeset in User");
  res.json({ message: "It works!" });
});

module.exports = router;
