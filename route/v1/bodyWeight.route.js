const express = require("express");
const router = express.Router();
const bodyWeightController = require("../../controller/bodyweight.controller");

// create a body-weight
router.route("/create-body-weight").post(bodyWeightController.createBodyWeight);

//   get by client Id
router
  .route("/get-body-weight/:clientId")
  .get(bodyWeightController.getBodyWeightMetrics);

module.exports = router;
