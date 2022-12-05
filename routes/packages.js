/** @format */

const express = require("express");
const { postPackage, getPackageNewsFeed,getsinglePackages } = require("../controllers/packages");
const router = express.Router();

//post api for saving package details to database
router.route("/packageDetails").post(postPackage);
router.route("/packageDetails").get(getPackageNewsFeed);
router.route("/singlepackageDetails/:id").get(getsinglePackages);

module.exports = router;
