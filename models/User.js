const mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Defines what individual author document looks like
var UserSchema = new Schema(
  {
    name: {type: String},
    login: {type: String},
    password: {type: String},
    email: {type: String},  
    tweets: [{type: Schema.Types.ObjectId,
            ref: 'Tweet'}]  
  }
);

//Export model - compiles a model
// instances of models are called documents

module.exports = mongoose.model('User', UserSchema);