const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/books', shopController.getBooks)

router.get('/authors', shopController.getAuthors)

router.get('/publishers', shopController.getPublishers)

router.get('/cart', shopController.getCart)

module.exports = router;