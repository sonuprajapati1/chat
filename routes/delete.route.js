var express = require('express');
var router = express.Router();
// controllers
var deleteController = require('../controllers/delete.controller')

router
  .get('/',deleteController.getdelete)
  .delete('/room/:roomId', deleteController.deleteRoomById)
  .delete('/message/:messageId', deleteController.deleteMessageById)

module.exports = router;