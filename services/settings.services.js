const Settings = require("../model/settings")


// create a settings 
exports.createASettingService = async (data) => {
    const result = await Settings.create(data)
    return result
}
exports.getSettingService = async (clientId) => {
    const result = await Settings.findOne({ clientId: clientId })
    return result
}

// update a settings ------------
exports.updateSettingService = async (id, updatedData) => {
    const result = await Settings.updateOne({ clientId: id }, { $set: updatedData })
    return result
}