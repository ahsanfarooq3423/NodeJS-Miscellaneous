const express = require("express");

const storeController = require("../controller/complaints");

const router = express.Router();


router.get("/add-complaint", storeController.addComplaint)


router.post("/add-complaint", storeController.saveComplaint)


module.exports = router;