var mongoose = require('mongoose');

var BoatSchema = new mongoose.Schema({
  boatType: {
    type: String,
    unique: true,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  }, 
  status: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('boats', BoatSchema);
