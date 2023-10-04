const mongoose = require("mongoose");

const commonTaskFieldsSchema = {
    taskName: {
        type: String
    },
    note: {
        type: String
    },
    date: {
        type: Date
    },
    setReminder: {
        type: String
    },
    enableComment: {
        type: Boolean,
        default: false
    },
    showReminder: {
        type: Boolean,
        default: false
    },
    frequency: {
        type: String,
        enum: ["Weekly", "Monthly"],
    },
    repeatEvery: {
        type: Number,
    },
    repeatOn: {
        type: [String],
    },
    forNext: {
        type: Number,
    },
    assignDate: {
        type: Date
    }
};

const taskSchema = new mongoose.Schema({
    clientId: {
        type: String
    },
    coachId: {
        type: String
    },
    general: [{
        ...commonTaskFieldsSchema,
        images: [{
            type: String
        }],
        documents: [{
            type: String
        }],
        links: [{
            type: String
        }],
    }
    ],
    progressPhoto: [commonTaskFieldsSchema],
    bodyMatrics: [{
        ...commonTaskFieldsSchema,
        bodyFat: {
            type: Boolean
        },
        weight: {
            type: Boolean
        },
        hip: {
            type: Boolean
        },
    }],
    form: [
        {
            ...commonTaskFieldsSchema,
            newForm: [
                {
                    formName: {
                        type: String,
                    },
                    owner: {
                        type: String,
                    },
                    shareWithOrg: {
                        type: String,
                    },
                },
            ],
        },
    ],
    habit: [
        {
            ...commonTaskFieldsSchema,
            habitName: {
                type: String,
            },
            repeatCount: {
                type: Number,
            },
            repeatOn: {
                type: [String],
                enum: ["Time", "Minutes", "Servings", "Cups"],
            },
            repeatEvery: {
                type: String,
            },

        },
    ],
},
    {
        timestamps: true,
        sparse: true,
    });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

