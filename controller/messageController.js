const { addMessageService, getMessagesService } = require("../services/messageServices")



exports.addMessage = async (req, res) => {
    try {
        const data = req.body
        const result = await addMessageService(data)
        res.status(200).json({
            status: "success",
            massage: "Message Added successfully",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "unable to add chat",
            error: error.message
        })
    }
}

exports.getMessages = async (req, res) => {
    try {
        const chatId = req.params.chatId
        const result = await getMessagesService(chatId)
        res.status(200).json({
            status: "success",
            massage: "Chat retrived successfully",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "unable to retrived chat",
            error: error.message
        })
    }
}