const express = require("express");
const { getCreateStore,postCreateStore, delCreateStore, upDateCreateStore } = require("../controllers/CreateStore");
const router = express.Router();


router.route("/getCreateStore").get(getCreateStore)
router.route("/postCreateStore").post(postCreateStore)
router.route("/delCreateStore/:id").delete(delCreateStore)
router.route("/upDateCreateStore/:id").patch(upDateCreateStore)
module.exports = router;