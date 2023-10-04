const express = require("express");
const router = express.Router();
const addNewMatricController = require("../../controller/addNewMatrics.controller");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");

// create a new matrics
router
  .route("/create-new-matrics")
  .post(
    verifyToken,
    authorization("coach", "client"),
    addNewMatricController.createANewMatrics
  );

// get only active matrics
router
  .route("/get-active-matrics")
  .get(
    verifyToken,
    authorization("client", "coach"),
    addNewMatricController.getAllActiveMatrics
  );

// get all new atrics
router
  .route("/get-new-matrics")
  .get(
    verifyToken,
    authorization("coach", "client"),
    addNewMatricController.getAllNewMatrics
  );

// get , delete, update the new matrics by id ----------
router
  .route("/:id")
  .patch(
    verifyToken,
    authorization("coach"),
    addNewMatricController.updateANewMatrics
  )
  .delete(
    verifyToken,
    authorization("coach"),
    addNewMatricController.deleteANewMatrics
  )
  .get(
    verifyToken,
    authorization("coach", "client"),
    addNewMatricController.getANewMatrics
  );

// active the matrics -----------
router
  .route("/active-matrics/:id")
  .patch(
    verifyToken,
    authorization("coach"),
    addNewMatricController.activeANewMatrics
  );

module.exports = router;
