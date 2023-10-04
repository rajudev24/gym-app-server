const mongoose = require("mongoose");

const workoutTempSchema = new mongoose.Schema({
  timezone: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: ObjectId,
  },
  share: {
    type: Number,
  },
  sections: {
    type: [Mixed], // refer to sections
  },
  tags: {
    type: Array,
  },
});
