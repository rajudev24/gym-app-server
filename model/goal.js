const mongoose = require('mongoose');


// limitation schema 

const goalSchema = new mongoose.Schema({
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

const Goal = mongoose.model("goal",goalSchema)


module.exports = Goal;

