const express = require("express");
const router = express.Router();
const exerciseController = require("../../controller/exercise.controller");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");

// save a exercise
router
  .route("/create-exercise")
  .post(
    verifyToken,
    authorization("coach"),
    exerciseController.createAExercise
  );

// save a exercise
router
  .route("/create-exercise")
  .post(
    verifyToken,
    authorization("coach", "admin"),
    exerciseController.createAExercise
  );

// get all exercise
router
  .route("/get-all-exercise")
  .get(
    verifyToken,
    authorization("admin", "coach", "client"),
    exerciseController.getAllExercise
  );

// update and delete a exercise
router
  .route("/:id")
  .patch(
    verifyToken,
    authorization("coach"),
    exerciseController.updateAExercise
  )
  .delete(
    verifyToken,
    authorization("coach"),
    exerciseController.deleteAExercise
  );

// filter for search exercise
router
  .route("/exercises/filter")
  .get(
    verifyToken,
    authorization("coach", "client"),
    exerciseController.filterExercises
  );

// search a exercise by exercise name
router
  .route("/search-by-name/:id")
  .get(
    verifyToken,
    authorization("coach", "client"),
    exerciseController.getExerciseBySearch
  );

module.exports = router;
