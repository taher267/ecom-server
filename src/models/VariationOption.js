const { Schema, model } = require("mongoose");

const variationOptionSchema = new Schema({
  variation_id: {
    type: Schema.ObjectId,
    required: [true, "Variation id is mandatory"],
    ref: "Variation",
  },
  values: {
    type: [String],
    required: [true, "name is mandatory"],
  },
});

const VariationOption = model("VariationOption", variationOptionSchema);

module.exports = VariationOption;
