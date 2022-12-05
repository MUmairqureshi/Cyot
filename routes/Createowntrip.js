/** @format */

const express = require("express");
const {
  getcreateowntrip,
  postcreateowntrip, 
  deletecreateowntrip,
  editcreateowntrip,
} = require("../controllers/createowntrip");
const router = express.Router();
router.route("/getcreateowntrip").get(getcreateowntrip);
router.route("/postcreateowntrip").post(postcreateowntrip);
router.route("/deletecreateowntrip/:id").delete(deletecreateowntrip);
router.route("/editcreateowntrip/:id").patch(editcreateowntrip);

module.exports = router;

///localhost:5000/api/createowntrip/deletecreateowntrip/63173b11ed3fa7216c433827
