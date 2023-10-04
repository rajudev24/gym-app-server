const mongoose = require('mongoose');


// note schema 

const notesSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    coachEmail:{
        type: String,
    },
    clientId: {
        type : String
    }
},
{
    timestamps: true,
}
)

// user model 

const Notes = mongoose.model("notes",notesSchema)


module.exports = Notes;

