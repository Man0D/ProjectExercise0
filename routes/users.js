var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.Id);
  //TODO: récupérer en base les données de l'ID

  res.render('users', { "Id": req.query.Id } );
});

module.exports = router;
