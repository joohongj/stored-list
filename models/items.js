// Your code goes here
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  favoriteFood: String,
  isInstructor: Boolean,

});


// used to be users!!!
module.exports = mongoose.model('items', schema);