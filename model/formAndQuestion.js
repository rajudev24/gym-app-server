const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formName: {
    type: String,
  },
  owner: {
    type: String,
  },
  shareWithOrg: {
    type: String,
    enum: ["shared with other", "private owner"],
  },
});

const commonQuestionSchema = new mongoose.Schema({
  singleChoice: [
    {
      question: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

// welcome schema

const welcomeScreenSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: [
    {
      image: {
        type: String,
      },
    },
  ],
});

// single Choice schema

const singleChoiceSchema = new mongoose.Schema({
  commonQuestion: {
    type: [commonQuestionSchema],
  },
  option: [
    {
      otherOption: {
        type: String,
      },
    },
  ],
  isOptionRequired: {
    type: Boolean,
  },
  isActiveOtherOption: {
    type: Boolean,
  },
});

// multiple choice schema

const multipleChoiceSchema = new mongoose.Schema({
  commonQuestion: {
    type: [commonQuestionSchema],
  },
  option: [
    {
      otherOption: {
        type: String,
      },
    },
  ],
  isOptionRequired: {
    type: Boolean,
  },
  isActiveOtherOption: {
    type: Boolean,
  },
});

// linear choice schema

const linearSchema = new mongoose.Schema({
  commonQuestion: {
    type: [commonQuestionSchema],
  },
  label: {
    type: Number,
  },
  labelOptional: {
    type: Number,
  },
  isRequired: {
    type: Boolean,
  },
});

// short answer schema

const ShortAnswerSchema = new mongoose.Schema({
  commonQuestion: {
    type: [commonQuestionSchema],
  },
  shortAnswer: {
    type: String,
  },
  isRequired: {
    type: Boolean,
  },
});

// long answer

const longAnswerTextSchema = new mongoose.Schema({
  commonQuestion: {
    type: [commonQuestionSchema],
  },
  shortAnswer: {
    type: String,
  },
  isRequired: {
    type: Boolean,
  },
});

// signature schema

const signetureSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  signature: {
    type: String,
  },
  clientName: {
    type: String,
  },
});

const faqSchema = new mongoose.Schema(
  {
    welcome: {
      type: [welcomeScreenSchema],
    },
    singleChoice: {
      type: [singleChoiceSchema],
    },
    multipleChoice: {
      type: [multipleChoiceSchema],
    },
    linearSchema: {
      type: [linearSchema],
    },
    shortAnswer: {
      type: [ShortAnswerSchema],
    },
    longAnswer: {
      type: [longAnswerTextSchema],
    },
    signature: {
      type: [signetureSchema],
    },
    coachId: {
      type: String,
    },
    form: {
      type: [formSchema], // refers from formSchema
    },
  },

  {
    timestamps: true,
  }
);

const FAQ = mongoose.model("FAQ", faqSchema);

module.exports = FAQ;
