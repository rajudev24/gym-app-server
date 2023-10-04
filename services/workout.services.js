const Workout = require("../model/workout");

exports.createAWorkoutService = async (data) => {
  // training_sets model -[deprecated]
  // const { rest, reps, is_completed } = data.training_sets;

  // exercises model
  const {
    note,
    exercise,
    tempo,
    each_side,
    exercise_id,
    author_id,
    alternatives,
  } = data.exercises;

  // // sections model
  // const { type, format } = data?.sections;

  // workout model
  const { title, description, author, share, tags, timezone } = data.workout;

  // create workout
  const result = await Workout.create({
    title,
    description,
    author,
    share,
    sections: {
      type: "",
      format: "",
      exercises: {
        note,
        exercise,
        tempo,
        each_side,
        exercise_id,
        author_id,
        alternatives,
        training_sets: data.training_sets,
      },
    },
    tags,
    timezone,
  });
  return result;
};

// get workout by clientId
exports.getWorkoutByClientService = async (clientId) => {
  const result = await Workout.find({ clientId: clientId });
  return result;
};
