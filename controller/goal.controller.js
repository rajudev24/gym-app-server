const { createGoalService, getAGoalService, deleteAgoalService, updateAgoalService, getGoalByClientIDService } = require("../services/goal.services");


// save a goal controller-------------------------------
exports.createAGoal = async(req, res)=>{
    try {
        const data = req.body;
        const result = await createGoalService(data)
        res.status(200).json({
            status: 'success',
            massage: "Goal create Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Goal added Error",
            error: error.message
        })
    }
}

// get a goal by id----------
exports.getAGoal=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await getAGoalService(id)
        res.status(200).json({
            status: 'success',
            massage: "goal get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "goal get Error",
            error: error.message
        })
    }
}


// delete goal controller by id----------
exports.deleteAGoal=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await deleteAgoalService(id)
        res.status(200).json({
            status: 'success',
            massage: "goal delete Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "goal delete Error",
            error: error.message
        })
    }
}

//update a goal controller by id----------
exports.updateAGoal=async(req, res)=>{
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateAgoalService(id, body)
        res.status(200).json({
            status: 'success',
            massage: "goal update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "goal update Error",
            error: error.message
        })
    }
}


// get all goal by clientID--------------

exports.getGoalByClientId = async (req, res, next) => {

    try {
        const clientId = req.params.clientId
        const result = await getGoalByClientIDService(clientId)

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
