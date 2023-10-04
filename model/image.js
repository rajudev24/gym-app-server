const mongoose = require('mongoose');


// limitation schema 

const imageSchema = new mongoose.Schema({
   picture:[
    {
        image:{
            type: String
        }
    }
   ],
    coachEmail:{
        type: String,
    },
    clientId: {
        type : String,
      
    }
},
{
    timestamps: true,
}
)

// user model 

const Image = mongoose.model("Image",imageSchema)


module.exports = Image;

