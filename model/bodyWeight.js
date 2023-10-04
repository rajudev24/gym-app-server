const mongoose = require("mongoose");

// matrics schema

const bodyWeightSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    value: {
      type: Number,
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

const BodyWeight = mongoose.model("bodyWeight", bodyWeightSchema);

module.exports = BodyWeight;
