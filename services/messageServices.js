const MessageModel = require('../model/MessageModel')


exports.addMessageService = async (data) => {
    const { chatId, senderId, text } = data
    const message = {
        chatId,
        senderId,
        text
    };
    const result = await MessageModel.create(message)
    return result
}

exports.getMessagesService = async (chatId) => {
    const result = await MessageModel.find({ chatId })
    return result
}