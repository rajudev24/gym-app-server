const mongoose = require('mongoose');


// client schema 

const teammateSchema = new mongoose.Schema({
    mateFirstName: {
        type: String,
        required: true
    },
    mateLastName: {
        type: String,
        required: true
    },
    coachEmail:{
        type: String,
    },
    adminEmail:{
        type: String,
    },
    password:{
        type: String,
        default:""
     },
     isVerified: {
        type: Boolean,
        default: false
     },
     status:{
        type: String,
        enum:["pending","active"],
        default: "pending"
     },
    role: {
        type: String,
        enum: ["client", "coach", "admin"],
       
    },
   
},
{
    timestamps: true,
}
)


// Teammate model 

const Teammate = mongoose.model("teammate",teammateSchema)


module.exports = Teammate;
