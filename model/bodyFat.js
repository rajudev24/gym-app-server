const mongoose = require("mongoose");

// matrics schema

const bodyFatSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    value: {
      type: Number,
    },
    unit: {
      type: String,
    },
    clientId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// user model

const BodyFat = mongoose.model("bodyFat", bodyFatSchema);

module.exports = BodyFat;
