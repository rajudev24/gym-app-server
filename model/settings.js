const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    weightUnit: {
      type: String,
      enum: ["Metric (kg)", "US/Imperial (lb)"],
    },
    distanceUnit: {
      type: String,
      enum: ["Metric (km)", "US/Imperial (miles)"],
    },
    lengthUnit: {
      type: String,
      enum: ["US/Imperial (miles)", "US/Imperial (inch)"],
    },
    timeZone: {
      type: Object,
    },
    dateFormat: {
      type: String,
    },
    isWorkoutComments: {
      type: Boolean,
      default: false,
    },
    isRestDayMessage: {
      type: Boolean,
      default: false,
    },
    isLogComments: {
      type: Boolean,
      default: false,
    },
    isTask: {
      type: Boolean,
      default: false,
    },
    isFoodJournal: {
      type: Boolean,
      default: false,
    },
    isMacrosGoal: {
      type: Boolean,
      default: false,
    },
    isVoiceMessages: {
      type: Boolean,
      default: false,
    },
    isProgressPhoto: {
      type: Boolean,
      default: false,
    },
    isBodyMetrics: {
      type: Boolean,
      default: false,
    },
    isRearrangeWorkouts: {
      type: Boolean,
      default: false,
    },
    clientId: {
      type: String,
    },
    coachId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model("settings", settingsSchema);

module.exports = Settings;
