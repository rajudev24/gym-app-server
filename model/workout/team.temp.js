const mongoose = require("mongoose");

const teamTempSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
  },
  team: {
    type: ObjectId,
  },
  role: {
    type: Number,
  },
});
