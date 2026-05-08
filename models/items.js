// Your code goes here
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  quote: String,
  job: Boolean,

});


// used to be users!!!
module.exports = mongoose.model('items', schema);