const { createExerciseService, getAllExerciseServices, updateAExerciseService, deleteAExerciseService, filterExerciseServices, getExerciseBySerachService } = require("../services/exercise.services");
const upload = require("../config");

// save a matrics controller-------------------------------
exports.createAExercise = async (req, res) => {
    try {
        const uploadMultiple = upload('aperio-photos').array('imageUrls', 4);
        uploadMultiple(req, res, async err => {
            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }
            const imageUrls = req.files.map(file => file.location);
            const { type, ...data } = req.body;
            data.imageUrls = imageUrls;
            const result = await createExerciseService(data);
            res.status(200).json({
                status: 'success',
                message: "Exercise created Successfully!",
                data: result
            });
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: "exercise added Error",
            error: error.message
        });
    }
}

exports.getAllExercise = async (req, res) => {
    try {
        const result = await getAllExerciseServices()
        res.status(200).json({
            status: 'success',
            message: "Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: " Error",
            error: error.message
        })
    }
}

// edit a exercise 

exports.updateAExercise = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateAExerciseService(id, body)
        res.status(200).json({
            status: 'success',
            massage: "exercise update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "exercise update Error",
            error: error.message
        })
    }
}

// delete a exercise 
exports.deleteAExercise = async (req, res) => {
    try {

        const id = req.params.id
        const result = await deleteAExerciseService(id)
        res.status(200).json({
            status: 'success',
            massage: "Exercise delete Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Exercise delete Error",
            error: error.message
        })
    }
}

// filter a exercise controller 
exports.filterExercises = async (req, res) => {
    try {

        const { exerciseType, videoLink, tags, trackingField, primaryFocus } = req.query;
        const result = await filterExerciseServices(exerciseType, videoLink, tags, trackingField, primaryFocus)

        res.status(200).json({
            status: 'success',
            massage: "Exercise delete Successfully!",
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


// search a exercise by name 
exports.getExerciseBySearch = async (req, res) => {

    try {
        const searchItem = req.params.search
        const result = await getExerciseBySerachService(searchItem)

        res.status(200).json({
            status: 'success',
            massage: "exercise search Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " exercise Not Found.",
            error: error.message
        })
    }
}