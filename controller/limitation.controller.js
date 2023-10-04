const { createLimitationService, getAlimitationService, deleteAlimitationService, updateALimitationService, getAllLimitationServices, getLimitionByClientIDService } = require("../services/limitation.services");

// save a limitation controller-------------------------------
exports.createALimitation = async(req, res)=>{
    try {
        const data = req.body;
        const result = await createLimitationService(data)
        res.status(200).json({
            status: 'success',
            massage: "Limitation create Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "limitation added Error",
            error: error.message
        })
    }
}

// get all limitation ----------------
exports.getAllLimition=async(req, res)=>{
    try {
        const result = await getAllLimitationServices()
        res.status(200).json({
            status: 'success',
            massage: "all limitation get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "all limitation get Error",
            error: error.message
        })
    }
}

// get a note controller by id----------
exports.getALimitation=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await getAlimitationService(id)
        res.status(200).json({
            status: 'success',
            massage: "limitation get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "limitation get Error",
            error: error.message
        })
    }
}

// delete a limitation ----------
exports.deleteALimitation=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await deleteAlimitationService(id)
        res.status(200).json({
            status: 'success',
            massage: "limitation delete Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "limitation delete Error",
            error: error.message
        })
    }
}

// update a limitation ----------
exports.updateALimitation=async(req, res)=>{
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateALimitationService(id,body)
        res.status(200).json({
            status: 'success',
            massage: "limitation update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "limitation update Error",
            error: error.message
        })
    }
}


// get all note by clientID--------------

exports.getLimitionByClientId = async (req, res, next) => {

    try {
        const clientId = req.params.clientId
        const result = await getLimitionByClientIDService(clientId)

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