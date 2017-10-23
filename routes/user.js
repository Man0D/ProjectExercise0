var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/:id', function(req, res, next) {

  //TODO: récupérer en base les données de l'ID
    mongoose.model('contacts').findOne({'_id': req.id },'firstName lastName company', function(err, contact){
        if(err) throw err;
        if (contact != null) {

            console.log(contact);

            console.log('%s %s %s', contact.firstName, contact.lastName, contact.company);
        }
    });


  res.render('users', { "Id": req.id } );
});

module.exports = router;
