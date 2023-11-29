const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is mandatory"] },
    email: { type: String, required: [false, "Email address is mandatory"] },
    phone_number: {
      type: String,
      required: [false, "Phone number is mandatory"],
    },
    password: { type: String, required: [false, "Password is mandatory"] },
    passwordAllow: {
      type: String,
      required: [false, "allow password is mandatory"],
    },
    lastLogin: { type: Date },
    roles: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
    },
    refreshToken: [
      {
        type: String,
        select: false,
      },
    ],
  },
  { timestamps: true }
);
userSchema.index({ email: 1 }, { unique: true });
const User = model("User", userSchema);

module.exports = User;
