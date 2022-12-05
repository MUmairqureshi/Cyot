/** @format */

const express = require("express");
const { hotelDetail, getHotelDetail } = require("../controllers/hotel");
const router = express.Router();

//post api for saving details of hotel booking in database
router.route("/hotelDetail").post(hotelDetail);
//get api for all details of hotel booking in database
router.route("/hotelDetail").get(getHotelDetail);
module.exports = router;
