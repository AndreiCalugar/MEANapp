var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlBoats = require('../controllers/boatsList');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
//boats
router.get('/boats',auth,ctrlBoats.getAll);
router.put('/boats',auth,ctrlBoats.updateBoat);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
