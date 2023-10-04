const mongoose = require('mongoose');


// exerciseSchema

const exerciseSchema = new mongoose.Schema({
    exerciseName: {
        type: String
    },
    primaryFocus: {
        type: String
    },
    trackingField: {
        type: String,
    },
    instructions: {
        type: String
    },
    tags: {
        type: String
    },
    videoUrl: {
        type: String
    },
    imageUrls: [
        {
            type: String
        }
    ],
    exerciseType: {
        type: String,
        enum: ["aperio", "custom exercise"],
        default: "custom exercise"
    },
    coachId: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
},
    {
        timestamps: true,
    }
)

// user model 

const Exercise = mongoose.model("exercise", exerciseSchema)


module.exports = Exercise;

