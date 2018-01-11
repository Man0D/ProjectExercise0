var express = require('express');
var router = express.Router();
var passport = require('passport');
//var mongo = require('../model/contacts');



router.get('/', function(req, res, next) {
    res.render('homepage', { title: "IO-Contacts", message: req.flash('loginMessage') });
});

router.post('/', passport.authenticate('local-login', {

    successRedirect : '/main', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
