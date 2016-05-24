var mongoose = require('mongoose');


var artSchema = new mongoose.Schema({
  name      : String,
  image     : String,
  medium    : String,
  location  : String,
});



var Art = mongoose.model('Art', artSchema);

module.exports = Art;
