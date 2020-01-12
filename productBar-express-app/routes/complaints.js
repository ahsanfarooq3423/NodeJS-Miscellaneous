const express = require("express");

const router = express.Router();

router.get("/add-complaint", (req, res, next) => {
    res.send("In the add complaint panel");
})


module.exports = router;