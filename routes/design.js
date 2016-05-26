var express = require('express');
var router = express.Router();
var designController = require('../controllers/design_controller.js');
//requst art_model



router.route('/')
  .get(designController.index)
  .post(designController.create);


router.route('/:id')
  .delete(designController.destroy);

module.exports = router;
