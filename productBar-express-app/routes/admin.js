const express = require("express");

const storeController = require("../controller/store");

const router = express.Router();


router.get("/", storeController.adminData )
router.post("/add-product", storeController.saveProduct )


exports.routes = router;
