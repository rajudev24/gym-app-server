const mongoose = require('mongoose');


// limitation schema 

const limitationSchema = new mongoose.Schema({
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

const Limitation = mongoose.model("limitation",limitationSchema)


module.exports = Limitation;

