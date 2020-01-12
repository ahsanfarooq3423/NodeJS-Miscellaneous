const express = require("express");

const router = express.Router();

router.get("/add-complaint", (req, res, next) => {
    res.render("complaints",{
        path : '/add-complaint'
    });
})


module.exports = router;