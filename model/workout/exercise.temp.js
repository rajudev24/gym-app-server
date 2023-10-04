const mongoose = require("mongoose");

const exerciseTempSchema = new mongoose.Schema({
  exercise: {
    type: ObjectId,
  },
  tempo: {
    type: Date,
  },
  each_side: {
    type: Boolean,
  },
  exercise_instance: {
    instructions: {
      type: [String],
    },
    author: {
      is_trainer: {
        type: Boolean,
      },
      full_name_sort: {
        type: String,
      },
      current_team: {
        type: ObjectId,
      },
      color: {
        type: String,
      },
      sex: {
        type: Date,
      },
      profile_email: {
        type: String,
      },
      last_name: {
        type: String,
      },
      teams: {
        type: [Mixed], // refer to teams
      },
      is_archived: {
        type: Boolean,
      },
      timezone: {
        type: String,
      },
      _id: {
        type: ObjectId,
      },
      first_name: {
        type: String,
      },
      full_name: {
        type: String,
      },
      email: {
        type: String,
      },
      sub_trainers: {
        type: Array,
      },
      trainers: {
        type: Array,
      },
    },
    binding_system_exercise: {
      type: ObjectId,
    },
    category_type_name: {
      type: String,
    },
    body_part: {
      type: String,
    },
    video_only: {
      type: Boolean,
    },
    custom: {
      type: Boolean,
    },
    preview_50: {
      type: Mixed, // got null
    },
    popularity: {
      type: Number,
    },
    title: {
      type: String,
    },
    tags: {
      type: Array,
    },
    fields: {
      type: [String],
    },
    _id: {
      type: ObjectId,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
    },
    category_type: {
      type: ObjectId,
    },
    preview_300: {
      type: Mixed, // got null
    },
    category: {
      type: ObjectId,
    },
    picture: {
      type: [String],
    },
    from_everfit: {
      type: Boolean,
    },
    last_interacted: {
      type: Date,
    },
    author_name: {
      type: String,
    },
    share: {
      type: Number,
    },
    exercise: {
      type: ObjectId,
    },
  },
  alternatives: {
    type: Array,
  },
  training_sets: {
    type: [Mixed], // refer to training sets
  },
});
