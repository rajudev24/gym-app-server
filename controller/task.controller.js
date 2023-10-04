const { getAllTaskServices, createATaskService, updateATaskService, getATaskService, deleteATaskService } = require("../services/task.services");
const upload = require("../config");

// create a task controller 
exports.createATask = async (req, res) => {
    try {
        const uploadSingle = upload('aperio-photos').single('images');
        uploadSingle(req, res, async err => {
            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }
            const image = req.file?.location
            const data = req.body;
            if (image) {
                data.general.images = image;
            }
            const result = await createATaskService(data)
            res.status(200).json({
                status: 'success',
                message: "Task create Successfully!",
                data: result
            })
        });

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Task added Error",
            error: error.message
        })
    }
}


// get all task 
exports.getAllTask = async (req, res) => {
    try {

        const result = await getAllTaskServices()
        res.status(200).json({
            status: 'success',
            massage: " Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Error",
            error: error.message
        })
    }
}

// edit a task 
exports.updateATask = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateATaskService(id, body)
        res.status(200).json({
            status: 'success',
            massage: "Task update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Task update Error",
            error: error.message
        })
    }
}

// get a task by id -----------------
exports.getATask = async (req, res) => {
    try {
        const id = req.params.id
        const result = await getATaskService(id)
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

exports.deleteATask = async (req, res) => {
    try {

        const id = req.params.id
        const result = await deleteATaskService(id)
        res.status(200).json({
            status: 'success',
            massage: "Task delete Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Task delete Error",
            error: error.message
        })
    }
}
