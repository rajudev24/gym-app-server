const {
  createAWorkoutService,
  getWorkoutByClientService,
} = require("../services/workout.services");

// save a matrics controller-------------------------------
exports.createAWorkout = async (req, res) => {
  try {
    const data = req.body;
    // const {exerciseId} = req.body;
    // console.log("workoutId",exerciseId)
    console.log(data);
    const result = await createAWorkoutService(data);
    // console.log("workout result",result)
    res.status(200).json({
      status: "success",
      massage: "Workout create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Workout added Error",
      error: error.message,
    });
  }
};

// get workouts by clientId
exports.getWorkoutByClientId = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const result = await getWorkoutByClientService(clientId);
    // console.log("workout result",result)
    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " Error",
      error: error.message,
    });
  }
};
