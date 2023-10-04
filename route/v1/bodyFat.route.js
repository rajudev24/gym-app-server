const express = require("express");
const router = express.Router();
const bodyFatController = require("../../controller/bodyFat.controller");

// create a body-matrics
router.route("/create-body-fat").post(bodyFatController.createBodyFat);

//   get by client Id
router.route("/get-body-fat/:clientId").get(bodyFatController.getBodyMetrics);

module.exports = router;
