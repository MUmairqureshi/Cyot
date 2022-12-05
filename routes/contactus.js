/** @format */

const express = require("express");
const { contactus, getcontact,deletecontact,editcontact } = require("../controllers/ContactUs");
const router = express.Router();
router.route("/getcontactus").get(getcontact);
router.route("/postcontactus").post(contactus);
router.route("/deletecontactus/:id").delete(deletecontact);
router.route("/editcontactus/:id").patch(editcontact);
module.exports = router;