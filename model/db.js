var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ProjectExercise0";
MongoClient.connect(url);

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
