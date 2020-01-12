const express = require("express");


const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("products",{
        path : '/',
        products : adminData.store.products
    });
})


module.exports = router;