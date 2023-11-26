const { Schema, model } = require("mongoose");

const countrySchema = new Schema(
  {
    country_name: {
      type: String,
      required: [true, "Country name is mandatory"],
    },
  },
  { timestamps: true }
);

const Country = model("Country", countrySchema);

module.exports = Country;
