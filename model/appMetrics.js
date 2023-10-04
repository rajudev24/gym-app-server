const mongoose = require("mongoose");

// matrics schema

const appMetricsSchema = new mongoose.Schema(
  {
    bodyFat: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    weight: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],

    clientId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// user model

const AppMetrics = mongoose.model("appMetrics", appMetricsSchema);

module.exports = AppMetrics;
