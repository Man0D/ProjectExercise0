var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongo = require('../model/user');

router.get('/', function(req, res, next) {
    res.render('signup', { title: "IO-Contacts - Sign in", message : req.flash('signupMessage')});
});

 router.post('/', passport.authenticate('local-signup', {

    successRedirect : '/main', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

module.exports = router;
