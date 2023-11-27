const { Schema, model } = require("mongoose");

const variationSchema = new Schema(
  {
    product_id: {
      type: Schema.ObjectId,
      required: [true, "Variation id is mandatory"],
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "name is mandatory"],
      enum: ["Size", "Color", "Material"],
    },
  },
  { versionKey: false }
);

const Variation = model("Variation", variationSchema);

module.exports = Variation;
