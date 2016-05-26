var userController = {};
var User = require('../models/user');
var passport = require('passport');
require('../config/passport')(passport);

userController.index = function(req, res) {
   User.find({}, function(err, users) {
    if (err) {
      throw err;
    }
    res.json(users);
  });
};

userController.new = function(req, res) {
  res.render('Signup');
};

userController.create = function(req, res) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect: '/users/design',
    failureRedirect: '/',
    failureFlash: true
  });

  return signUpStrategy(req, res);
};

userController.getLogin = function(request, response) {
  response.render('login.ejs', { message: request.flash('loginMessage') });
};



userController.postLogin = function(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/users/design',
    failureRedirect : '/users/signup',
    failureFlash : true
  });
  console.log('loginProperty');
  return loginProperty(request, response);
};

userController.getLogout = function(request, response) {
  request.logout();
  response.redirect('/');
};
userController.update = function(req, res) {};

userController.show = function(req, res) {};

userController.edit = function(req, res) {};

userController.destroy = function(req, res) {
  User.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      throw err;
    }
    res.json({success: true, message: "user destroyed!"});
  });
};

module.exports = userController;

