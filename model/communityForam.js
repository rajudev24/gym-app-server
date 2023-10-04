const mongoose = require("mongoose");

// Chat schema
const createForamSchema = new mongoose.Schema({
  coverPhoto: [{ type: String }],
  foramName: {
    type: String,
  },
  foramDescription: {
    type: String,
  },
  addMembers: [
    {
      clientId: {
        type: String,
      },
    },
  ],
});

const communityForamSchema = new mongoose.Schema({
  communityForma: {
    type: [createForamSchema],
  },
  postDescription: {
    type: String,
  },
  photos: [{ type: String }],
  like: {
    type: Number,
  },
  comment: {
    type: String,
  },
  coachId: {
    type: String,
  },
});

// foram model
const CommunityForam = mongoose.model("communityForam", communityForamSchema);

module.exports = CommunityForam;
