const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    unit_number: {
      type: String,
      required: [false, "Unit number is mandatory"],
    },
    street_number: {
      type: String,
      required: [false, "Street number is mandatory"],
    },

    address_line1: {
      type: String,
      required: [false, "address_line1 is mandatory"],
    },
    address_line2: {
      type: String,
      required: [false, "address_line2 is mandatory"],
    },
    city: {
      type: String,
      required: [false, "city is mandatory"],
    },
    region: {
      type: String,
      required: [false, "region is mandatory"],
    },
    postal_code: {
      type: String,
      required: [false, "postal_code is mandatory"],
    },
    country_id: {
      type: Schema.ObjectId,
      required: [false, "Street number is mandatory"],
      ref: "Country",
    },
  },
  { timestamps: true }
);

const Address = model("Address", addressSchema);

module.exports = Address;
