var express = require('express');
var router = express.Router();
var userController = require('../controllers/users_controller');
var passport = require('passport');
var bodyParser = require('body-parser');


router.route('/')
  .get(userController.index);

// router.route('/design')
//   .get(userController.new);

router.route('/signup')
  .get(userController.new)
  .post(userController.create);

router.route('/login')
  .get(userController.getLogin)
  .post(userController.postLogin);

router.route('/logout')
  .get(userController.getLogout);


router.route('/design')
  .get(function(req, res, next) {
    res.render('design', { title: 'Project 3' });
  });

  router.route('/job')
  .get(function(req, res, next) {
    res.render('job', { title: 'Project 3' });
  });

  router.route('/about')
  .get(function(req, res, next) {
    res.render('about', { title: 'Project 3' });
  });



module.exports = router;


