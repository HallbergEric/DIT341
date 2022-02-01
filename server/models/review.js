var mongoose = require ('mongoose');
const account = require('./account');
const story = require('./story');

// Define a schema
var Schema = mongoose.Schema;

// Use schema constructor to create a new schema instance
var reviewSchema = new Schema ({
    
    // Define fields inside the constructor's object parameter
    content: {type : String},
    title : {type : String},
    //this is the account who writes the review not the one who owns the story on which the review is being written
    account:{type:Schema.Types.ObjectId , ref : 'accounts',require:true},
    story :{type:Schema.Types.ObjectId , ref : 'stories',require:true}

});

// Compile the model from the schema
// First argument: create a database collection with the name 'accounts'
// Second argument: the schema which will be used to create the model
module.exports = mongoose.model('reviews', reviewSchema);
