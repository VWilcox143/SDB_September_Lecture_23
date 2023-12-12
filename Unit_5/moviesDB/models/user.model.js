const mongoose = require('mongoose'); //Gives access to a SCHEMA method that helps us generate a new object.

const UserSchema = new mongoose.Schema({
    // column for our document
    firstName: {
        type: String, // what datatype this is expecting.

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: true, // default is false
        unique: true, // duplicate emails will throw an error response
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema); 
