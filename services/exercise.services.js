const Exercise = require("../model/exercise")

// save a exercise 
exports.createExerciseService=async(data)=>{
    const result = await Exercise.create(data)
    return result
}

// get all exercise 
exports.getAllExerciseServices=async()=>{
    const result = await Exercise.find({})
    return result
}

// update a exercise service 

exports.updateAExerciseService=async(id,data)=>{
    const result = await Exercise.updateOne({_id : id},{$set : data})
    return result
}

// delete a exercise 
exports.deleteAExerciseService=async(id)=>{
    const result = await Exercise.deleteOne({_id : id})
    return result
}

// filter exercise 
exports.filterExerciseServices = async(exerciseType, videoLink, tags, trackingField, primaryFocus)=>{
    const filterQuery = {};

    if (exerciseType) {
        filterQuery.exerciseType = exerciseType;
    }
    if (videoLink) {
        filterQuery.videoLink = videoLink;
    }
    if (tags) {
        filterQuery.tags = { $regex: tags, $options: 'i' }; // Case-insensitive regex search
    }
    if (trackingField) {
        filterQuery.trackingField = trackingField;
    }
    if (primaryFocus) {
        filterQuery.primaryFocus = primaryFocus;
    }

    const result = await Exercise.find(filterQuery)
    return result
}


// search exercise by name ---------
exports.getExerciseBySerachService = async (exerciseName) => {
    const result = (await Exercise.find({ exerciseName: { $regex: new RegExp(exerciseName, 'i') } }))
    return result
};