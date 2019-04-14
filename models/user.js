const mongoose = require("mongoose");
const validator = require("validator");
const integerValidator = require("mongoose-integer");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

bcrypt.compare(myPlaintextPassword, saltRounds).then(function(res) {
  // res == true
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      index: { unique: true },
      unique: true
    },
    password: {
      required: true,
      type: String
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
      required: [true, "email is required"],
      unique: true
    },
    age: {
      type: Number,
      integer: true,
      required: true,
      min: 18
    },
    gender: {
      type: String,
      enum: ["male", "female", "NA"],
      lowercase: true,
      default: "NA",
      required: true
    },
    country: {
      type: String,
      enum: [
        "egypt",
        "ksa",
        "britain",
        "france",
        "india",
        "germany",
        "italy",
        "singapore"
      ],
      required: true,
      lowercase: true
    }
  },
  {
    useCreateIndex: true,
    autoIndex: true
  }
);

userSchema.plugin(integerValidator);

userSchema.pre("save", function() {
  console.log(this);
});

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;
