const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
const router = express.Router()
const teammateController = require("../../controller/teammate.controller")

// create a teammate ---------------
router.route("/create-teammate")
.post(verifyToken,authorization("admin"),teammateController.createATeammate)



module.exports = router;