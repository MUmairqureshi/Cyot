/** @format */

const express = require("express");
const { getNewTrip } = require("../controllers/newtrips");
const router = express.Router();

//Get Api for getting all details of all trips saved in database
router.route("/NewTrips").get(getNewTrip);
module.exports = router;
