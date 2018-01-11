var express = require('express');
var router = express.Router();
var mongo = require('../model/contacts')


const   DefaultSort     = null,
        DefaultLimit    = 20;

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    console.log(req.query.li );

    switch(req.query.s) {
        case 'cmpy':
            var sort = {'company': 1};
            break;
        case 'lname':
            var sort = {'lastName': 1};
            break;
        default:
            var sort = DefaultSort;
    }

    switch(req.query.li) {
        case '40':
            var limit = 40;
            break;
        case '60':
            var limit = 60;
            break;
        case 'all':
            var limit = null;
            break;
        default:
            var limit = DefaultLimit;
    }

    console.log(limit)

  //TODO: send data about contact list
    mongo.find({},'_id firstName lastName company', function(err, contacts){
        if(err) throw err;
        //res.send(contacts);

        var tab = new Array();
        var ids = new Array();

        contacts.forEach(function(contact,i){
            var a = { "fname":contact.firstName , "lname":contact.lastName , "company":contact.company };
            tab[i] = a;
            ids[i] = contact._id
            //console.log('%s %s %s', contact.firstName, contact.lastName, contact.company);
        })

        res.render('index', { title: "My Contacts", contacts: tab , identities: ids});

    }).sort(sort).limit(limit);


});

router.get('/new', isLoggedIn, function(req, res, next){
   res.render('new',{ title: "New Contact" });
});

router.post('/new', isLoggedIn, function(req, res, next){
    var contact = new mongo(req.body);
    contact.save( function(err,createdObject){
        if(err) throw err;
        //res.redirect('/');
    });
    res.redirect('/main');
});

router.get('/delete/:id', isLoggedIn, function(req, res, next){
    mongo.findByIdAndRemove(req.params.id, function(err, contact) {
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        var response = {
            message: "Contact successfully deleted",
            id: contact._id
        };
        res.redirect('/main');
        //res.status(200).send(response);
    });
});

module.exports = router;

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}