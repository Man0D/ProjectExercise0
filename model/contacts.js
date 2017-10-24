var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
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
});

mongoose.model('contacts', Schema);