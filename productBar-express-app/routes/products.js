const express = require("express");
const storeController  = require("../controller/store");


const router = express.Router();

router.get("/", storeController.getProducts)

module.exports = router;