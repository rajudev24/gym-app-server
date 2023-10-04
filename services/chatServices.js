const ChatModel = require('../model/ChatModel')


exports.createChatService = async (data) => {
    const existingChat = await ChatModel.findOne({
        members: {
            $all: [data.senderId, data.receiverId]
        }
    });

    if (existingChat) {

        return {
            status: "success",
            massage: "Chat Created successfully",
        };
    }
    const newChatData = {
        members: [data.senderId, data.receiverId]
    };
    const result = await ChatModel.create(newChatData)
    return result
}

exports.getChatService = async (userId) => {
    const result = await ChatModel.find({
        members: { $in: [userId] }
    })
    return result
}

exports.findChatService = async (usersId) => {
    const result = await ChatModel.find({
        members: { $all: [usersId.firstId, usersId.secondId] }
    })
    return result
}