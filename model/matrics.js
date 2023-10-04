const mongoose = require("mongoose");

// matrics schema

const matricesSchema = new mongoose.Schema(
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
    bmi: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    hip: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    calf: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    chest: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    waist: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    shoulders: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    thigh: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    bicep: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    skeletalMuscleMass: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    fatMass: [
      {
        date: { type: Date, default: Date.now },
        measurement: {
          value: { type: Number },
          unit: { type: String },
        },
      },
    ],
    coachEmail: {
      type: String,
      required: true,
    },
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

const Matrics = mongoose.model("matrics", matricesSchema);

module.exports = Matrics;
