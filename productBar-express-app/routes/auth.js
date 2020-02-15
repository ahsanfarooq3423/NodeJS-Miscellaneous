const express = require('express');

const authController = require('../controller/auth');


const router = express.Router()


router.get('/login',authController.getLogin );

router.get('/signup',authController.getSignup );

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.get('/logout', authController.logout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);




module.exports  = router;