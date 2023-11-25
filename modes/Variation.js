const { Schema, model } = require("mongoose");

const variationSchema = new Schema({
  category_id: {
    type: Schema.ObjectId,
    required: [true, "Variation id is mandatory"],
    ref: "Category",
  },
  name: {
    type: String,
    required: [true, "name is mandatory"],
    enum: ["Size", "Color", "Material"],
  },
});

const Variation = model("Variation", variationSchema);

module.exports = Variation;
