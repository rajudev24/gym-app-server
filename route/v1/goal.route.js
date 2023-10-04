const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
const router = express.Router();
const goalController = require("../../controller/goal.controller");

// create goal ------------
router
  .route("/create-goal")
  .post(
    verifyToken,
    authorization("coach", "client"),
    goalController.createAGoal
  );

// get ,delete, update goal by id -----------
router
  .route("/:id")
  .patch(verifyToken, authorization("coach"), goalController.updateAGoal)
  .delete(verifyToken, authorization("coach"), goalController.deleteAGoal)
  .get(verifyToken, authorization("coach", "client"), goalController.getAGoal);

// get notes by goal id ----------------
router
  .route("/get-allgoal-clientID/:clientId")
  .get(
    verifyToken,
    authorization("coach", "client"),
    goalController.getGoalByClientId
  );

module.exports = router;
