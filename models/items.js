// Your code goes here
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  quote: String,
  job: String,

});

module.exports = mongoose.model('users', schema);


