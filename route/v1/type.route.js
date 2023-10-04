const express = require("express");
const router = express.Router()
const typeController = require("../../controller/type.controller")


// router.route("/get-type/:id")
// .get(typeController.getTypesById)

router.route("/get-type/:type")
.get(typeController.getTypes)


router.route("/all-type")
.get(typeController.getAllType)





module.exports = router;