/** @format */

const express = require("express");
const { GetCalender } = require("../controllers/calender");
const router = express.Router();

//Get Api for getting all details of orders saved in database to be displayed on calender
router.route("/Calender/:id").get(GetCalender);
module.exports = router;
