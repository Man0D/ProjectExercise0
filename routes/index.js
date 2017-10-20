var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //TODO: send data about contact list
});

router.post('/', function(req, ers, next){
  res.send();
})

module.exports = router;
