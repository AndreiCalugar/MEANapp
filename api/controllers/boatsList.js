var passport = require('passport');
var mongoose = require('mongoose');
var boats = mongoose.model('boats');


module.exports.getAll = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    boats
      .find()
      .exec(function(err, boats) {
        res.status(200).json(boats);
      });
  }
};

module.exports.updateBoat = function(req, res) {

  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    boats
      .findByIdAndUpdate(req.body._id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
  }

};
