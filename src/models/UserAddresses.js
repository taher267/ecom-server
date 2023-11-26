const { Schema, model } = require("mongoose");

const userAddressSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      required: [true, "UserId is mandatory"],
      ref: "User",
    },
    address_id: {
      type: Schema.ObjectId,
      required: [true, "AddressId is mandatory"],
      ref: "Address",
    },
    is_default: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

const UserAddresses = model("UserAddresses", userAddressSchema);

module.exports = UserAddresses;
