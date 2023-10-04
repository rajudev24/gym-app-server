const mongoose = require('mongoose');

// AddNewMatrics schema 
const addNewMatricsSchema = new mongoose.Schema({
    matricName: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    unit: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
    }
)

// AddNewMatrics model 

const AddNewMatrics = mongoose.model("AddNewMatrics", addNewMatricsSchema)


module.exports = AddNewMatrics;

