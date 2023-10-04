const mongoose = require('mongoose');


// Chat schema 
const ChatSchema = new mongoose.Schema({
    members: {
        type: Array,
    }
},
    {
        timestamps: true,
    }
)

// Chat model 
const ChatModel = mongoose.model("Chat", ChatSchema)


module.exports = ChatModel;