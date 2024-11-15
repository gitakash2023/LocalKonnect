const express = require('express');
const passport = require('passport');
const router = express.Router();
const socialAuthController = require('./socialAuthController');

router.get('/google', passport.authenticate('google', { scope: ['email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), socialAuthController.googleAuth);

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), socialAuthController.facebookAuth);

module.exports = router;
