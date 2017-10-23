var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/:id', function(req, res, next) {

  //TODO: récupérer en base les données de l'ID
    console.log(req.params.id);
    mongoose.model('contacts').findOne({'_id': req.params.id }, function(err, contact){
        if(err) throw err;
        if (contact != null) {

            console.log(contact);

            console.log('%s %s %s', contact.firstName, contact.lastName, contact.company);

            res.render('users', {
                Id: req.params.id ,
                fname: contact.firstName ,
                lname: contact.lastName,
                bday: contact.birthDate,
                company: contact.company,
                emails: contact.emails
            } );
        }
        else
            res.redirect('/')
    });



});

module.exports = router;
