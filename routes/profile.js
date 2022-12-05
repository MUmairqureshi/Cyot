/** @format */

const express = require("express");
const {
  postProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profile");
const router = express.Router();

//post api for uploading profile details to database
router.route("/profile").post(postProfile);
//put api for profilepage to update profile details
router.route("/updateprofile/:id").put(updateProfile);
//get api for profile of a user
router.route("/profile/:id").get(getProfile);
module.exports = router;
