const mongoose = require("mongoose");

// Message schema
const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Message model
const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
