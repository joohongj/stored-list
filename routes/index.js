var express = require('express');
var router = express.Router();
//    USERS INSTEAD OF ITEMS!!!!
const Users = require('../models/users');

/* GET home page. */
router.get('/', function (req, res, next) {
    // Your code goes here
    //    USERS INSTEAD OF ITEMS!!!!
    Users.find()
        .then(function (data) {
            console.log(data);
            //    USERS INSTEAD OF ITEMS!!!!
            res.render('index', { title: 'Users', list: data })
        })
        .catch(function (error) {
            console.log('Something went wrong', error);
        })
});

module.exports = router;


