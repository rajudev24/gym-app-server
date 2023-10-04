const express = require("express");
const router = express.Router();
const workOutController = require("../../controller/workout.controller");

// create workout
router.route("/create-workout").post(workOutController.createAWorkout);

// get workouts by clientId
// router
//   .route("/get-workout/:clientId")
//   .get(workOutController.getWorkoutByClientId);

module.exports = router;
