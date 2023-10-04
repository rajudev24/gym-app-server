const express = require("express");
const router = express.Router()
const settingsController = require("../../controller/settings.controller")

// create settings route 
router.route("/create-settings")
    .post(settingsController.createASettings)

// Get settings by id route 
router.route("/:id")
    .get(settingsController.getSettings)

// update a settings 
router.route("/update-settings/:id")
    .patch(settingsController.updateASettings)



module.exports = router;