const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
const router = express.Router();
const progressController = require("../../controller/progress.controller");

// create a progress -------
router.route("/create-progress").post(progressController.createAProgress);

// get progress by clientID ----------
router
  .route("/:clientId")
  .get(
    verifyToken,
    authorization("coach", "client", "admin"),
    progressController.getProgressByClientId
  );

// delete and edit a progress ------------
router
  .route("/:id")
  .patch(
    verifyToken,
    authorization("coach", "client"),
    progressController.updateAProgress
  )
  .delete(
    verifyToken,
    authorization("coach", "client"),
    progressController.deleteAProgress
  );

module.exports = router;
