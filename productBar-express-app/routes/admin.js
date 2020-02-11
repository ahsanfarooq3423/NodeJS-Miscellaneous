const express = require("express");

const authMiddleware = require('../middleware/auth-middleware');

const storeController = require("../controller/store");

const router = express.Router();


router.get("/", authMiddleware.authenticate ,storeController.adminData );

router.post("/add-product", authMiddleware.authenticate ,storeController.saveProduct );

router.post("/delete-product", authMiddleware.authenticate ,storeController.deleteProduct);


exports.routes = router;
