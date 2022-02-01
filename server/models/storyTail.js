var mongoose = require ('mongoose');
const account = require('./account');
const story = require('./story');
// Define a schema
var Schema = mongoose.Schema;

// Use schema constructor to create a new schema instance
var storyTailSchema = new Schema ({
    
    // Define fields inside the constructor's object parameter
    content: {type : String},
   //writer of the story tail not the owner of parent story
    account: {type: Schema.Types.ObjectId , ref : 'accounts',required:true},
    story: {type: Schema.Types.ObjectId , ref : 'stories',required:true}
});

// Compile the model from the schema
// First argument: create a database collection with the name 'storyTail'
// Second argument: the schema which will be used to create the model
module.exports = mongoose.model('storyTail', storyTailSchema);