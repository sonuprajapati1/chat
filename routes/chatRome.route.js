var express = require('express');
var router = express.Router();
// controllers
var chatRoom  = require('../controllers/chatRoom.controller');
router
  .get('/', chatRoom.getRecentConversation)
  .get('/:roomId', chatRoom.getConversationByRoomId)
  .post('/initiate', chatRoom.initiate)
  .post('/:roomId/message', chatRoom.postMessage)
  .put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

module.exports = router;