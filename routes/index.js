var express = require('express');
var router = express.Router();
var instructorController = require('../controllers/instructor_controller.js');
var nodemailer = require('nodemailer');
var favicon       = require('serve-favicon');
var Instructor = require('../models/inst_to_sel.js');
var bodyParser    = require('body-parser');
var mongoose = require('mongoose');
var profileController = require('../controllers/profile_controller.js');



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index');
console.log("this is the root route that goes to index and renders it");

});

router.get('/design', function(req, res, next) {
 res.render('design.ejs');
console.log("this is the root route that goes to index and renders it");

});

module.exports = router;
