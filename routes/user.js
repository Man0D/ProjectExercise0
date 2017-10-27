var express = require('express');
var router = express.Router();
var mongo = require('../model/contacts')


/* GET users listing. */
router.get('/:id', function(req, res, next) {

    mongo.findById( req.params.id , function(err, contact){
        if(err) throw err;
        if (contact != null) {

            console.log(contact);

            console.log('%s %s %s', contact.firstName, contact.lastName, contact.emails);

            res.render('users', {
                Id: req.params.id ,
                fname: contact.firstName ,
                lname: contact.lastName,
                bday: contact.birthDate,
                company: contact.company,
                emails: contact.emails[0].email,
                addresses: formatAddress(contact.addresses[0])
            } );
        }
        else
            res.redirect('/')
    });
});

router.post('/:id', function(req, res, next) {
    mongo.findById( req.params.id , function(err, contact){
        if (err) throw err;

        if(contact.firstName != req.body.firstName)
            contact.firstName = req.body.firstName;

        if(contact.lastName != req.body.lastName)
            contact.lastName = req.body.lastName;

        if(contact.birthDate != req.body.birthDate)
            contact.birthDate = req.body.birthDate;

        if(contact.company != req.body.company)
            contact.company = req.body.company;

        contact.save( function(err,updatedContact){
            if (err) throw err;
            console.log('User successfully updated!');
        });
    });

    res.redirect('/user/'+req.params.id);
});

module.exports = router;

function formatAddress(c){
    var address = c.streetNb + ' ' + c.streetType + ' ' + c.street + ' - ' + c.city + ' (' + c.state + ') ' + c.zipCode + ' ' + c.country;
    return address
}