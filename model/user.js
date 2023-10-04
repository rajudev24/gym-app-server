const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: true,
      default: "123456",
      trim: true,
    },
    isPasswordChange: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["coach", "client", "admin"],
    },
    creatorName: {
      required: true,
      type: String,
    },
    creatorId: {
      required: true,
      type: String,
    },
    category: {
      type: String,
      enum: ["Online", "In-Person", "Hybrid"],
      default: "Online"
    },
    status: {
      type: String,
      enum: ["Connected", "Pending", "Offline"],
      default: "Pending"
    },
    phoneNumber: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    gender: {
      type: String,
    },
    inviteToken: {
      type: String,
    },
    owner: {
      type: String,
    },
    resetToken: String,
    resetTokenExpiration: Date,
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   const fullName = this.name.split(" ");
//   this.firstName = fullName[0];
//   this.lastName = fullName[1];
//   next();
// });

userSchema.pre("save", function (next) {
  const saltRounds = 10;
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (plainPassword, hashedPassword) {
  const isPasswordValid = bcrypt.compareSync(plainPassword, hashedPassword);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
