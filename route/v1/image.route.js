const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
const router = express.Router()
const imageController = require("../../controller/image.controller")

// create a image 
router.route("/create-image")
.post(verifyToken,authorization("coach"),imageController.createAImage)

// get images under client id
router.route("/get-images-clientId/:clientId")
.get(verifyToken,authorization("coach","client"),imageController.getImageByClientId)

// get limited images route 
router.route("/get-limited-image/:clientId")
.get(verifyToken,authorization("coach","client"),imageController.getLimitedImage)

module.exports = router;