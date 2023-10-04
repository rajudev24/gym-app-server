const express = require("express")
const router = express.Router()
const taskController = require("../../controller/task.controller")


// create a task 
router.route("/create-task")
.post(taskController.createATask)

// get all task 
router.route("/get-all-task")
.get(taskController.getAllTask)

// get one task, delete a task , update a task 
router.route("/:id")
.patch(taskController.updateATask)
.delete(taskController.deleteATask)
.get(taskController.getATask)

module.exports = router;