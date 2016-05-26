var designController = {};
var Design = require('../models/art');
var controller = {};


designController.index = function(req, res) {
   Design.find({}, function(err, designs) {
    if (err) {
      throw err;
    }
    res.json(designs);
  });
};

// design.new = function(req, res) {
//   res.render('artwork');
// };

designController.create = function(req, res) {
  var body = req.body;
  var design = new Design();
  design.name = body.name;
  design.image = body.image;
  design.medium = body.medium;
  design.location = body.location;

  design.save(function(err) {
    if (err) throw err;
    res.json(design);
  });
};

designController.update = function(req, res) {};

designController.show = function(req, res) {};

designController.edit = function(req, res) {};

designController.destroy = function(req, res) {};

module.exports = designController;

