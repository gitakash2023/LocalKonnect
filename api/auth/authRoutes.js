const express = require('express');
const router = express.Router();
const authController = require('../auth/authController');

router.post('/signup', authController.signup);
router.post('/verifyOTP', authController.verifyOTP);
router.post('/createPassword', authController.createPassword);
router.post('/login', authController.login);

module.exports = router;
