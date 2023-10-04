const express = require("express")
const router = express.Router()
const limitationController = require("../../controller/limitation.controller")
const verifyToken = require("../../middleware/verifyToken")
const authorization = require("../../middleware/authorization")

// create limitation ------------
router.route("/create-limitation")
.post(verifyToken,authorization("coach","client"),limitationController.createALimitation)

// get all limitation ----------
router.route("/get-all-limitation")
.get(verifyToken,authorization("coach"),limitationController.getAllLimition)

// get note by id -----------
router.route("/:id")
.patch(verifyToken,authorization("coach"),limitationController.updateALimitation)
.delete(verifyToken,authorization("coach"),limitationController.deleteALimitation)
.get(verifyToken,authorization("coach","client"),limitationController.getALimitation)

// get limitation by clientid ----------------
router.route("/get-alllimitation-clientID/:clientId")
.get(verifyToken,authorization("coach","client"),limitationController.getLimitionByClientId)

module.exports = router;