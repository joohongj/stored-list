var express = require('express');
var router = express.Router();
const Items = require('../models/items');

/* GET home page. */
router.get('/', function (req, res, next) {
    // Your code goes here
    Items.find()
    .then(function(data) {
console.log(data);
res.render('index', { title: 'Items', users: data })
    })
    .catch(function(error){
console.log('Something went wrong', error);
    })
});

module.exports = router;
