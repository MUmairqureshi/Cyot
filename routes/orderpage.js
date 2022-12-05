/** @format */

const express = require("express");
const { getOrders, postOrders } = require("../controllers/orderpage");
const router = express.Router();

//Get Api for getting all details of orders saved in database
router.route("/Orders").get(getOrders);
router.route("/Orders").post(postOrders);
module.exports = router;
