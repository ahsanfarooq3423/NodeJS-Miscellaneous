const express = require("express");

const storeController = require("../controller/store");

const router = express.Router();


router.get("/", storeController.adminData );

router.post("/add-product", storeController.saveProduct );

// router.post("/delete-product", storeController.deleteProduct);


exports.routes = router;
