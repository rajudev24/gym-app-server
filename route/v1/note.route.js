const express = require("express")
const router = express.Router()
const noteController = require("../../controller/note.controller");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");


// create note ------------
router.route("/create-note")
    .post(verifyToken, authorization("coach"), noteController.createANote)

// get all notes ----------
router.route("/get-all-note")
    .get(verifyToken, authorization("coach, admin"), noteController.getAllNote)

// get note by id -----------
router.route("/:id")
    .patch(verifyToken, authorization("coach"), noteController.updateANote)
    .delete(verifyToken, authorization("coach"), noteController.deleteANote)
    .get(verifyToken, authorization("coach", "client"), noteController.getANote)

// get notes by Client id ----------------
router.route("/get-allnote-clientID/:clientId")
    .get(verifyToken, authorization("coach", "client", "admin"), noteController.getNoteByClientId)

module.exports = router;