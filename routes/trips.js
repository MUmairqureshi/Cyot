/** @format */
const express = require("express");
const { getTrips, postTrips } = require("../controllers/trips");
const router = express.Router();

//Get Api for getting all details of all trips saved in database
router.route("/trip").get(getTrips);
//Post Api for posting/saving details of a trip to the database
router.route("/trip").post(postTrips);

module.exports = router;
