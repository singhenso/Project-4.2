var express = require('express');
var router = express.Router();
var designController = require('./../controllers/design_controller.js');

router.route('/designs')
  .post(function(req, res, next) {

    var art = new Art();
    art.name = req.body.name;
    art.image = req.body.image;
    art.medium = req.body.medium;
    art.locaiton = req.body.locaiton;
  });

module.exports = router;

//   name      : String,
//   image     : String,
//   medium    : String,
//   location  : String,
// });
