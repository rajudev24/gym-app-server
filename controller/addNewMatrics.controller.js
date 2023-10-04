const { createANewMatricService, getAllNewMatricsServices, getANewMatricsServices, deleteANewMatricsServices, updateANewMatricsService, activeANewMatricsService, getAllActiveMatricService } = require("../services/addNewMatrics.services");

// save a matrics controller-------------------------------
exports.createANewMatrics = async (req, res) => {
    try {
        const data = req.body;
        const result = await createANewMatricService(data)
        res.status(200).json({
            status: 'success',
            massage: "Matrics create Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Matrics added Error",
            error: error.message
        })
    }
}


// get all new matrics  ----------------
exports.getAllNewMatrics=async(req, res)=>{
    try {
        const result = await getAllNewMatricsServices()
        res.status(200).json({
            status: 'success',
            massage: "all new matrics get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "all new matrics get Error",
            error: error.message
        })
    }
}


// get a new matrics by id  ----------------
exports.getANewMatrics=async(req, res)=>{
    try {
        const id = req.params.id
        const result = await getANewMatricsServices(id)
        res.status(200).json({
            status: 'success',
            massage: "a new matrics get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "a new matrics get Error",
            error: error.message
        })
    }
}

// get a note controller by id----------
exports.deleteANewMatrics=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await deleteANewMatricsServices(id)
        res.status(200).json({
            status: 'success',
            massage: "delete a new matric Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " delete a new matric Error",
            error: error.message
        })
    }
}


// update a new matric controller by id----------
exports.updateANewMatrics=async(req, res)=>{
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateANewMatricsService(id, body)
        res.status(200).json({
            status: 'success',
            massage: "a new matrics update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "a new matrics update Error",
            error: error.message
        })
    }
}


// active a new matric controller by id----------
exports.activeANewMatrics=async(req, res)=>{
    try {
        
        const id = req.params.id
        const { status } = req.body;
        const result = await activeANewMatricsService(id,status)
        res.status(200).json({
            status: 'success',
            massage: "active new matrics update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "active new matrics update Error",
            error: error.message
        })
    }
}


// get all active new matrics  ----------------
exports.getAllActiveMatrics=async(req, res)=>{
    try {
        const result = await getAllActiveMatricService()
        console.log(result)
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