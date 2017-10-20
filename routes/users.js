var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/:id', function(req, res, next) {

  //TODO: récupérer en base les données de l'ID
    mongoose.model('contacts').findOne({'id': req.id },'firstName lastName company', function(err, contacts){
        if(err) throw err;
        console.log('%s %s %s', contacts.firstName, contacts.lastName, contacts.company);
    });


  res.render('users', { "Id": req.id } );
});

module.exports = router;
