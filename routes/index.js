var express = require('express');
var router = express.Router();
var favicon       = require('serve-favicon');
var bodyParser    = require('body-parser');
var mongoose = require('mongoose');



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index');
console.log("this is the root route that goes to index and renders it");

});

// router.get('/design', function(req, res, next) {
//  res.render('design.ejs');
// });

module.exports = router;
