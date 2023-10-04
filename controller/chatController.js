const { createChatService, getChatService, findChatService } = require("../services/chatServices")


exports.createChat = async (req, res) => {
    try {
        const data = req.body
        const result = await createChatService(data)
        res.status(200).json({
            status: "success",
            massage: "Chat Created successfully",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "unable to create chat",
            error: error.message
        })
    }
}
exports.userChats = async (req, res) => {
    try {
        const userId = req.params.userId
        const result = await getChatService(userId)
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
exports.findChat = async (req, res) => {
    try {
        const usersId = req.params
        console.log(usersId)
        const result = await findChatService(usersId)
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
