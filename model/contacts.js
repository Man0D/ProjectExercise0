var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    company: String,
    emails: [{
        email: String,
        type: {
            type: String,
            enum: ['PRO', 'PERSONNAL']
        }
    }],
    addresses: [{
        streetNb: Number,
        streetType: String,
        street: String,
        city: String,
        state: String,
        zipCode: Number,
        country: String,
        type: {
            type: String,
            enum: ['PRO', 'PERSONNAL']
        }
    }]
});

var Contact = mongoose.model('contacts', Schema);

module.exports = Contact;