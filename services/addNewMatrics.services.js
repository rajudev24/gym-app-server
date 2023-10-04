const AddNewMatrics = require("../model/addNewMatrics")


// create a new matrics service ----------
exports.createANewMatricService = async (data) => {
    const result = await AddNewMatrics.create(data)
    return result
}

// get all new matrics services------------
exports.getAllNewMatricsServices = async () => {
    const result = await AddNewMatrics.find({});
    return result;
}

// get a new matrics services------------
exports.getANewMatricsServices = async (id) => {
    const result = await AddNewMatrics.find({ _id: id });
    return result;
}

// delete a new matrics services------------
exports.deleteANewMatricsServices = async (id) => {
    const result = await AddNewMatrics.deleteOne({ _id: id });
    return result;
}


// update a new matrics ------------
exports.updateANewMatricsService = async (id, data) => {
    const result = await AddNewMatrics.updateOne({ _id: id }, { $set: data })
    return result
}

// update a new matrics ------------
exports.activeANewMatricsService = async (id, status) => {
    const result = await AddNewMatrics.updateOne({ _id: id }, { $set: { status } })
    return result
}

// get all active matric -----------
exports.getAllActiveMatricService = async () => {
    const result = await AddNewMatrics.find({ status: true })
    // console.log(result)
    return result;
}