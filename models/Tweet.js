const mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Defines what individual author document looks like
var TweetSchema = new Schema(
  {
    content: {type: String},
    likes: {type: Number},  
    dislikes: {type: Number},  
  }
);

//Export model - compiles a model
// instances of models are called documents

module.exports = mongoose.model('Tweet', TweetSchema);


