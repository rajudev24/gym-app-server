const myTask = require("../model/myTask");

// create My task
exports.createMyTaskService = async (data) => {
  const result = await myTask.create(data);
  return result;
};

// get a My task
exports.getAMyTaskService = async (id) => {
  const result = await myTask.findOne({ _id: id });
  return result;
};

// delete a My task
exports.deleteAMyTaskService = async (id) => {
  const result = await myTask.deleteOne({ _id: id });
  return result;
};
