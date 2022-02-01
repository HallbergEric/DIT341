var mongoose = require ('mongoose');
const story = require('./story');
const review = require('./review');
// Define a schema
var Schema = mongoose.Schema;

// Use schema constructor to create a new schema instance
var accountSchema = new Schema ({
    
    // Define fields inside the constructor's object parameter
    fname: {type : String},
    lname: {type : String},
    username: {type:String, unique:true, required: true},
    email: {type : String}
});

// Compile the model from the schema
// First argument: create a database collection with the name 'accounts'
// Second argument: the schema which will be used to create the model
module.exports = mongoose.model('accounts', accountSchema);

