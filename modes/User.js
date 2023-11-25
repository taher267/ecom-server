const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: [false, "Email address is mandatory"] },
    phone_number: {
      type: String,
      required: [false, "Phone number is mandatory"],
    },
    password: { type: String, required: [false, "Phone number is mandatory"] },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
