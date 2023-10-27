var express = require('express');
var router = express.Router();
const jwt = require("../middlewares/jwt")

// controllers
var userController = require('../controllers/user.controller');
console.log("test user router");
router
  .get('/', userController.onGetAllUsers)
  .post('/' , jwt.encode, userController.onCreateUser)
  .get('/:id', userController.onGetUserById)
  .delete('/:id', userController.onDeleteUserById)
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;