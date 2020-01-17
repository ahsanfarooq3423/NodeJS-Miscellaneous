const express = require("express");
const storeController  = require("../controller/store");


const router = express.Router();

router.get("/products/:id", storeController.getProductDetails)

router.get("/products", storeController.getProducts)



module.exports = router;