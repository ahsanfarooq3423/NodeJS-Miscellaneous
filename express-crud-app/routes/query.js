const express = require("express");
const path  = require("path");

const rootDir = require("../util/path");


const router = express.Router();

router.get("/", (req,res,next)=> {
    res.sendFile(path.join(rootDir,"views", "query.html"))
})

router.post("/", (req,res,next)=> {
    res.send(req.body);
})

module.exports = router;