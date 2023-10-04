const { createNotesService, getAnoteService, deleteANoteService, updateANoteService, getAllNoteServices, getNotesByClientIDService } = require("../services/note.services");

// save a note controller-------------------------------
exports.createANote = async(req, res)=>{
    try {
        const data = req.body;
        const result = await createNotesService(data)
        res.status(200).json({
            status: 'success',
            massage: "note create Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "note added Error",
            error: error.message
        })
    }
}


// get all notes ----------------
exports.getAllNote=async(req, res)=>{
    try {
        const result = await getAllNoteServices()
        res.status(200).json({
            status: 'success',
            massage: "all note get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "all note get Error",
            error: error.message
        })
    }
}

// get a note controller by id----------
exports.getANote=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await getAnoteService(id)
        res.status(200).json({
            status: 'success',
            massage: "note get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "note get Error",
            error: error.message
        })
    }
}

// delete a limitation ----------
exports.deleteANote=async(req, res)=>{
    try {
        
        const id = req.params.id
        const result = await deleteANoteService(id)
        res.status(200).json({
            status: 'success',
            massage: "Note delete Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Note delete Error",
            error: error.message
        })
    }
}

// update a limitation ----------
exports.updateANote=async(req, res)=>{
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateANoteService(id,body)
        res.status(200).json({
            status: 'success',
            massage: "Note update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Note update Error",
            error: error.message
        })
    }
}

// get all note by clientID--------------

exports.getNoteByClientId = async (req, res, next) => {

    try {
        const clientId = req.params.clientId
        const result = await getNotesByClientIDService(clientId)

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
