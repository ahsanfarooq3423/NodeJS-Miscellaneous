const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/warehouse', adminController.getWareHouse);


router.get('/customers', adminController.getCustomers);


module.exports = router;