const express = require("express");

const complaintController = require("../controller/complaints");

const authMiddleware = require('../middleware/auth-middleware');


const router = express.Router();


router.get("/add-complaint",  authMiddleware.authenticate ,complaintController.addComplaint)


router.post("/add-complaint",  authMiddleware.authenticate ,complaintController.saveComplaint);


router.post('/delete-complaint', authMiddleware.authenticate ,complaintController.deleteComplaint);



module.exports = router;