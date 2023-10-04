const Limitation = require("../model/limitation")

// create limitation service ---------------
exports.createLimitationService=async(data)=>{
    const result = await Limitation.create(data)
    return result
}

// get all limitation------------
exports.getAllLimitationServices =async()=>{
    const result = await Limitation.find({});
    return result;
}



// get a limitation service ------------
exports.getAlimitationService=async(id)=>{
    const result = await Limitation.findOne({_id: id})
    return result
}

// delete a limitation -------------
exports.deleteAlimitationService=async(id)=>{
    const result = await Limitation.deleteOne({_id: id})
    return result
}

// update a limitation ------------
exports.updateALimitationService=async(id,data)=>{
    const result = await Limitation.updateOne({_id : id},{$set : data})
    return result
}

// get all limitation by clientID------------
exports.getLimitionByClientIDService=async(clientId)=>{
    const result = await Limitation.find({clientId : clientId})
    return result
}