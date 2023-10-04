const express = require("express");
const router = express.Router();
const appMetricsController = require("../../controller/appMetrics.controller");

// create a app metrics
router.route("/generate-a-metrics").post(appMetricsController.generateAMatrics);

// get all matrics by client-id
router.route("/:clientId").get(appMetricsController.getMetrics);

module.exports = router;
