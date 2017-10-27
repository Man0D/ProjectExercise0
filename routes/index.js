var express = require('express');
var router = express.Router();
var mongo = require('../model/contacts')

/* GET home page. */
router.get('/', function(req, res, next) {

  //TODO: send data about contact list
    mongo.find({},'_id firstName lastName company', function(err, contacts){
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

router.get('/new', function(req, res, next){
   res.render('new');
});

router.post('/new', function(req, res, next){

    var contact = new mongo(req.body);
    contact.save( function(err,createdObject){
        if(err) throw err;
        res.status(200).send(createdObject);
    });
    //res.send();
})

module.exports = router;
