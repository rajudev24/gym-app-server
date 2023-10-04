const mongoose = require('mongoose');


// AddNewMatrics schema 

const typeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Mass", "Cm", "Distance", "Time", "Rate", "Percent"]
  },
  unit: {
    type: Array,
    items: {
      type: String
    }
  }
    
  },
{
    timestamps: true,
}
)

// AddNewMatrics model 

const Type = mongoose.model("type",typeSchema)


module.exports = Type;

