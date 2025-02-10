const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"],
    max: [100, "Age cannot be more than 100"]
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);