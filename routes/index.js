var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {

  //TODO: send data about contact list
 mongoose.model('contacts').find({},'_id firstName lastName company', function(err, contacts){
      if(err) throw err;
      //res.send(contacts);

     var tab = new Array();
     var ids = new Array();

     contacts.forEach(function(contact,i){
         tab[i] = contact.firstName +" - "+ contact.lastName +" - "+ contact.company;
         ids[i] = contact._id
          //console.log('%s %s %s', contact.firstName, contact.lastName, contact.company);
      })

     res.render('index', { contacts: tab , identities: ids});

 });


});

router.post('/new', function(req, res, next){
    mongoose.model('contacts').insert({
        firstName: String,
        lastName: String,
        birthDate: Date,
        company: String,
        emails: [{
            email: String,
            type: String
        }],
        addresses: [{
            streetNb: Number,
            streetType: String,
            street: String,
            city:String,
            state: String,
            zipCode: Number,
            country: String,
            type: String
        }]
    })
    res.send();
})

module.exports = router;
