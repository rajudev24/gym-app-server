const Task = require("../model/task")

// create a task service
exports.createATaskService = async (data) => {
  const { coachId, clientId } = data;
  const existingTask = await Task.findOne({ coachId });
  if (!existingTask) {
    const createdTask = await Task.create(data);
    return createdTask;
  } else {
    for (const category in data) {
      if (category !== 'coachId' && category !== 'clientId') {
        if (Task.schema.paths.hasOwnProperty(category) && Array.isArray(data[category])) {
          existingTask[category] = [...existingTask[category], ...data[category]];
        }
      }
    }
    const updatedTask = await existingTask.save();
    return updatedTask;
  }
};






// get all task 
exports.getAllTaskServices = async () => {
  const result = await Task.find({})
  return result
}


// update a task service 
exports.updateATaskService = async (id, data) => {
  const result = await Task.updateOne({ _id: id }, { $set: data })
  return result
}

// get a task by id service 
exports.getATaskService = async (id) => {
  const result = await Task.find({ clientId: id })
  return result
}

// delete a task 
exports.deleteATaskService = async (id) => {
  const result = await Task.deleteOne({ _id: id })
  return result
}
