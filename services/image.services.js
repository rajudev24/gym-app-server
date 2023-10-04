const Image = require("../model/image")

// create a image ------------
// exports.createAImageService=async(data)=>{
//     const result = await Image.create(data)
//     return result
// }


// get images by client Id------
exports.getImageByClientIDService=async(clientId)=>{
    const result = await Image.find({clientId : clientId})
    return result
}

// get limited image 
exports.getLimitedImageService=async(clientId)=>{
    const result = await Image.find({clientId : clientId}).sort({ createdAt: -1 }).limit(1);
    return result
}