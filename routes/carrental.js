/** @format */

const express = require("express");
const { carRental } = require("../controllers/carrental");
const router = express.Router();

//post api for car rental details.
router.route("/CarRental").post(carRental);
module.exports = router;
