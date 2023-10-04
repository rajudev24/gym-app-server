const {  getImageByClientIDService, getLimitedImageService } = require("../services/image.services");


// save a image controller-------------------------------
exports.createAImage = async (req, res) => {
    try {
        const data = req.files;
        const data2 = req.body
        console.log(data2)
        console.log("imageData",data)
        // const result = await createAImageService(data)
        // res.status(200).json({
        //     status: 'success',
        //     massage: "image create Successfully!",
        //     data: result
        // })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "image added Error",
            error: error.message
        })
    }
}

// get all note by clientID--------------

exports.getImageByClientId = async (req, res) => {

    try {
        const clientId = req.params.clientId
        const result = await getImageByClientIDService(clientId)

        res.status(200).json({
            status: 'success',
            massage: " Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " Not Found.",
            error: error.message
        })
    }
}

// get limited image 

exports.getLimitedImage = async (req, res) => {

    try {
        const clientId = req.params.clientId
        const result = await getLimitedImageService(clientId)

        res.status(200).json({
            status: 'success',
            massage: " Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " Not Found.",
            error: error.message
        })
    }
}

