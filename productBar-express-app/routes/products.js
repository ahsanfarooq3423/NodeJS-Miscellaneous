const express = require("express");
const storeController  = require("../controller/store");

const authMiddleware = require('../middleware/auth-middleware');


const router = express.Router();

router.get("/products/:id",storeController.getProductDetails)

router.get("/products" ,storeController.getProducts);

router.get('/cart',  authMiddleware.authenticate, storeController.getCart);     

router.get('/cart/:id', authMiddleware.authenticate ,storeController.addProductToCart);


module.exports = router;
