var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {

  //TODO: send data about contact list
  mongoose.model('contacts').find({},'_id firstName lastName company', function(err, contacts){
      if(err) throw err;
      res.send(contacts);
      contacts.forEach(function(contact){
          console.log('%s %s %s', contact.firstName, contact.lastName, contact.company);
      })
  });
  ///////

  //res.render('index', { title: 'Express' });

});

router.post('/', function(req, ers, next){
  res.send();
})

module.exports = router;
