const mongoose = require("mongoose");

// teams
const teamTempSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
  },
  team: {
    type: ObjectId,
  },
  role: {
    type: Number,
  },
});

// training set
const trainingsetTempSchema = new mongoose.Schema({
  rest: {
    value: {
      type: Date,
    },
  },
  reps: {
    value: {
      type: Date,
    },
  },
  is_completed: {
    type: Boolean,
  },
  _id: {
    type: ObjectId,
  },
});

// exercise
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
        type: [teamTempSchema], // refer to teams
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
    type: [trainingsetTempSchema], // refer to training sets
  },
});

// section
const sectionTempSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  format: {
    type: String,
  },
  exercises: {
    type: [exerciseTempSchema], // refer to execersizes
  },
  _id: {
    type: ObjectId,
  },
});

// workout
const workoutSchema = new mongoose.Schema({
  timezone: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: ObjectId,
  },
  share: {
    type: Number,
  },
  sections: {
    type: [sectionTempSchema], // refer to sections
  },
  tags: {
    type: Array,
  },
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
