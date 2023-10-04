const express = require("express");
const router = express.Router();
const matricsController = require("../../controller/matrics.controller");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");

// create matrics ----------------
router.route("/create-matrics").post(matricsController.createAMatrics);

// get matrics ----------------
// extra api if needed then use
router
  .route("/:id")
  .get(
    verifyToken,
    authorization("coach", "client"),
    matricsController.getAMatrics
  );

router
  .route("/:id/:metricName")
  .patch(matricsController.updateAMatrics)
  .delete(matricsController.deleteAMatric);

// get matrics under client -----------------
router
  .route("/get-matrics-clientId/:clientId")
  .get(matricsController.getMatricsByClientId);

module.exports = router;
