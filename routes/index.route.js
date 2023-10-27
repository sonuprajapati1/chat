var express = require('express');
var router = express.Router();
var userRouter = require('../routes/users.route.js');
var chatRoomRouter = require('../routes/chatRome.route')
var deleteRouter = require('../routes/delete.route')
const loginRouter =  require("../routes/login.route.js")

// import users from '../controllers/user.js';
// middlewares
router.use("/login", loginRouter)

console.log("test index router");
router.use("/users", userRouter);
router.use("/room", chatRoomRouter);
router.use("/delete", deleteRouter);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



module.exports = router;
