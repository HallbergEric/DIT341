var mongoose = require ('mongoose');
// const review = require('./review');
// const storyTail = require('./storyTail');
const account = require('./account');

// Define a schema
var Schema = mongoose.Schema;

// Use schema constructor to create a new schema instance
var storySchema = new Schema ({
    
    // Define fields inside the constructor's object parameter
    content: {type : String},
    title : {type : String},
    account:{type:Schema.Types.ObjectId , ref : 'accounts',required:true}
});

// Compile the model from the schema
// First argument: create a database collection with the name 'accounts'
// Second argument: the schema which will be used to create the model
module.exports = mongoose.model('story', storySchema);