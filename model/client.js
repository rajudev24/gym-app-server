const mongoose = require('mongoose');


// client schema 

const clientSchema = new mongoose.Schema({
    clientFirstName: {
        type: String,
        required: true
    },
    clientLastName: {
        type: String,
        required: true
    },
   
    clientEmail : {
        type : String,
        required: true,
    },
   
    coachEmail:{
        type: String,
    },

    password:{
        type: String,
        default:"",
        trim: true
     },
     isVerified: {
        type: Boolean,
        default: false
     },

    status: {
        type: String,
        enum: ["online","hybrid","in-person"]
    },
    position:{
        type: String,
        enum:["connected","pending","offline"],
        default:"pending"
    },
    number:{
        type: String
    },
    birthDate:{
        type:String
    },
    gender:{
        type: String
    },
    owner:{
        type:String
    },
    role:{
        type: String,
        default: "client"
    }
},
{
    timestamps: true,
}
)



// user model 

const Client = mongoose.model("client",clientSchema)


module.exports = Client;
