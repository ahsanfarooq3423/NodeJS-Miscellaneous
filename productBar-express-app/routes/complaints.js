const express = require("express");

const complaintController = require("../controller/complaints");


const router = express.Router();


router.get("/add-complaint", complaintController.addComplaint)


router.post("/add-complaint", complaintController.saveComplaint);


router.post('/delete-complaint',complaintController.deleteComplaint);



module.exports = router;