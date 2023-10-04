const { getTypeService, getAllTypeService, getTypeIdService } = require("../services/type.services")

exports.getTypes = async (req, res) => {

    try {
        const type = req.params.type
        const result = await getTypeService(type)

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



// get all notes ----------------
exports.getAllType=async(req, res)=>{
    try {
        const result = await getAllTypeService()
        res.status(200).json({
            status: 'success',
            massage: " Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " Error",
            error: error.message
        })
    }
}


exports.getTypesById = async (req, res) => {

    try {
        const id = req.params.id
        const result = await getTypeIdService(id)

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

