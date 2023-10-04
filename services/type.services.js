const Type = require("../model/type")


exports.getTypeService = async(type)=>{
    const result = await Type.findOne({type : type})
    return result
}


// get all type 
exports.getAllTypeService= async()=>{
    const result = await Type.find({})
    return result
}


exports.getTypeIdService = async(id)=>{
    const result = await Type.findOne({_id : id})
    return result
}