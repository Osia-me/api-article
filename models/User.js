const mongoose = require('mongoose');

//Create Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Export Model
module.exports =  mongoose.model('User', UserSchema);
