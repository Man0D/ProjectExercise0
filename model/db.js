//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/ProjectExercise0";
//MongoClient.connect(url);

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ProjectExercise0');
mongoose.connect('mongodb://admin:admin00@ds123926.mlab.com:23926/projectexercise0');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.createCollection('contacts', function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});


db.collection('contacts').insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
});
*/
