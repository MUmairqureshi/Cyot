/** @format */

const express = require("express");
const { register, login, getLogin } = require("../controllers/user");
const router = express.Router();
const { auth } = require("../middleware/auth");
//post api for uploading images and registering user to database
router.route("/register").post(register);

//post Api for login
router.route("/login").post(login);

//get api for login
router.route("/login").get(getLogin);

module.exports = router;
