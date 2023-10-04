const mongoose = require("mongoose");

const sectionTempSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  format: {
    type: String,
  },
  exercises: {
    type: [Mixed], // refer to execersizes
  },
  _id: {
    type: ObjectId,
  },
});
