var express = require('express');
var router = express.Router();
//var mongo = require('../model/contacts');



router.get('/', function(req, res, next) {
    res.render('homepage', { title: "IO-Contacts"});
});

router.post('/', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
