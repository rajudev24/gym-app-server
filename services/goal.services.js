const Goal = require("../model/goal")

// create notes service ---------------
exports.createGoalService=async(data)=>{
    const result = await Goal.create(data)
    return result
}

// get a note service ------------
exports.getAGoalService=async(id)=>{
    const result = await Goal.findOne({_id: id})
    return result
}

// delete a goal-----------
exports.deleteAgoalService=async(id)=>{
    const result = await Goal.deleteOne({_id : id})
    return result
}

// update a goal ------------
exports.updateAgoalService=async(id,data)=>{
    const result = await Goal.updateOne({_id : id},{$set : data})
    return result
}

// get goals by client Id------
exports.getGoalByClientIDService=async(clientId)=>{
    const result = await Goal.find({clientId : clientId})
    return result
}