const express = require("express");
const { addMessage, getMessages } = require("../../controller/messageController");
const router = express.Router()

router.post('/', addMessage)
router.get('/:chatId', getMessages)

module.exports = router;