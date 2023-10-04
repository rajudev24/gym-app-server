const { upload } = require("../config");
const Progress = require("../model/progress")

// create a progress service 
exports.createProgressService = async (data, newImages) => {
    const { coachEmail, clientId } = data;
    const result = await Progress.findOneAndUpdate(
        { clientId },
        {
            $setOnInsert: {
                coachEmail,
                clientId,
            },
            $push: { photos: newImages },
        },
        {
            upsert: true,
            new: true,
        }
    );

    return result;
};



// get progress by client Id------
exports.getProgressByClientIDService = async (clientId) => {
    const result = await Progress.findOne({ clientId: clientId })
    return result
}


// update a progress ------------
exports.updateAProgressService = async (id, data) => {
    const result = await Progress.updateOne({ _id: id }, { $set: data })
    return result
}

// delete a limitation -------------
exports.deleteAProgressService = async (id) => {
    const result = await Progress.deleteOne({ _id: id })
    return result
}