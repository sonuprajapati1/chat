var express = require('express');
var router = express.Router();
const jwt = require("../middlewares/jwt")
var passport = require('passport');
require('../utils/passport.js');
// controllers
var loginController = require('../controllers/login.controller');
console.log("test user router");

router.post('/', jwt.decode, loginController.login);



module.exports = router;

