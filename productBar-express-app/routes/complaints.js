const express = require("express");

const adminData = require("./admin");

const router = express.Router();


const complaints = adminData.store.complaints
router.get("/add-complaint", (req, res, next) => {
    res.render("complaints",{
        path : '/add-complaint',
        complaints : complaints
    });
})


router.post("/add-complaint", (req,res, next) => {
    complaints.push(req.body)
    res.redirect("/add-complaint")
})


module.exports = router;