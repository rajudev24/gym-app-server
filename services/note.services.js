const Note = require("../model/note")

// create notes service ---------------
exports.createNotesService=async(data)=>{
    const result = await Note.create(data)
    return result
}

// get all notes------------
exports.getAllNoteServices =async()=>{
    const result = await Note.find({});
    return result;
}

// get a note service ------------
exports.getAnoteService=async(id)=>{
    const result = await Note.findOne({_id: id})
    return result
}

// delete a limitation -------------
exports.deleteANoteService=async(id)=>{
    const result = await Note.deleteOne({_id: id})
    return result
}

// update a limitation ------------
exports.updateANoteService=async(id,data)=>{
    const result = await Note.updateOne({_id : id},{$set : data})
    return result
}

// get notes by client Id------
exports.getNotesByClientIDService=async(clientId)=>{
    const result = await Note.find({clientId : clientId})
    return result
}