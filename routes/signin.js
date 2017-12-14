var express = require('express');
var router = express.Router();
//var mongo = require('../model/contacts');



router.get('/', function(req, res, next) {
    res.render('signin', { title: "IO-Contacts - Sign in"});
});

router.post('/', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
