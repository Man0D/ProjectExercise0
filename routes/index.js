var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {

  //TODO: send data about contact list
  mongoose.model('contacts').findOne({'firstName':'Steve'},'firstName lastName company', function(err, contacts){
      if(err) throw err;
      console.log('%s %s %s', contacts.firstName, contacts.lastName, contacts.company);
  });
  ///////

  res.render('index', { title: 'Express' });

});

router.post('/', function(req, ers, next){
  res.send();
})

module.exports = router;
