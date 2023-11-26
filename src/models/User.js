const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: [false, "Email address is mandatory"] },
    phone_number: {
      type: String,
      required: [false, "Phone number is mandatory"],
    },
    password: { type: String, required: [false, "Phone number is mandatory"] },
    passwordAllow: {
      type: String,
      required: [false, "Phone number is mandatory"],
    },
    lastLogin: { type: Date },
    roles: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
