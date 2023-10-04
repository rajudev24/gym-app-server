const {
  createMyTaskService,
  getAMyTaskService,
  deleteAMyTaskService,
} = require("../services/myTask.services");

exports.createMyTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await createMyTaskService(data);
    res.status(200).json({
      status: "success",
      massage: "Task created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Something Went Wrong",
      error: error.message,
    });
  }
};

// get a My task

exports.getMyTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getAMyTaskService(id);
    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Something went wrong",
      error: error.message,
    });
  }
};

// delete a task
exports.deleteAMyTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteAMyTaskService(id);
    res.status(200).json({
      status: "success",
      massage: " delete Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " delete Error",
      error: error.message,
    });
  }
};
