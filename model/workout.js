const mongoose = require("mongoose");

// teams
const teamSchema = new mongoose.Schema({
  team: {
    type: String,
  },
  role: {
    type: Number,
  },
});

// training set
const trainingsetSchema = new mongoose.Schema({
  rest: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  is_completed: {
    type: Boolean,
  },
});

// exercise
const exerciseSchema = new mongoose.Schema({
  exercise: {
    type: String,
  },
  tempo: {
    type: String,
  },
  each_side: {
    type: Boolean,
  },
  exercise_id: {
    type: String,
  },
  author_id: {
    type: String,
  },
  alternatives: {
    type: Array,
  },
  training_sets: {
    type: [mongoose.Schema.Types.Mixed], // refered to training sets
  },
});

// section
const sectionSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  format: {
    type: String,
  },
  exercises: {
    type: [exerciseSchema], // refer to execersizes
  },
});

// workout
const workoutSchema = new mongoose.Schema({
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
    type: String,
  },
  share: {
    type: Number,
  },
  sections: {
    type: [sectionSchema], // refer to sections
  },
  tags: {
    type: Array,
  },
  clientId: {
    type: String,
  },
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
