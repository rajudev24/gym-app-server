const mongoose = require("mongoose");

// My Task schema
const myTaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
    },
    taskDetail: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    colorTag: {
      type: String
    },
    userId: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

// model
const MyTask = mongoose.model("myTask", myTaskSchema);

module.exports = MyTask;
