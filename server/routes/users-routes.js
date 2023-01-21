const express = require("express");
const { check } = require("express-validator");
const checkAuth = require("../middleware/check-auth");

const usersController = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:uid", usersController.getUser);

router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

//이 아래로부터 토큰이 필요함
router.use(checkAuth);

router.patch("/:uid", usersController.updateUser);

router.delete("/:uid", usersController.deleteUser);

module.exports = router;
