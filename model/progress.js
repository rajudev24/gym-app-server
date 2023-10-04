const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    photos: [{ type: String }],
    coachEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    clientId: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
    },
    weight: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
