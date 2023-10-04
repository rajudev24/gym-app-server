const express = require("express");
const router = express.Router();
const studioCollectionController = require("../../controller/studiocollection.controller");

// create a studio collection
router
  .route("create-studio-collection")
  .post(studioCollectionController.createAStudioCollection);

module.exports = router;
