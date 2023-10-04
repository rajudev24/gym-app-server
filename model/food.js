const mongoose = require("mongoose");

// Chat schema
const foodSchema = new mongoose.Schema(
  {
    photos: [{ type: String }],
    text: {
      type: String,
    },
    date: {
      type: Date,
    },
    clientId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Chat model
const Food = mongoose.model("food", foodSchema);

module.exports = Food;
