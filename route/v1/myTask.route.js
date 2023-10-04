const express = require("express");
const router = express.Router();
const myTaskController = require("../../controller/myTask.controller");

// create a My task
router.route("/create-myTask").post(myTaskController.createMyTask);

// get a My task and delete
router
  .route("/:id")
  .get(myTaskController.getMyTask)
  .delete(myTaskController.deleteAMyTask);

module.exports = router;
