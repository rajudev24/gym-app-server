const mongoose = require("mongoose");

const trainingsetTempSchema = new mongoose.Schema({
  rest: {
    value: {
      type: Date,
    },
  },
  reps: {
    value: {
      type: Date,
    },
  },
  is_completed: {
    type: Boolean,
  },
  _id: {
    type: ObjectId,
  },
});
