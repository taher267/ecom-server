const { Schema, model } = require("mongoose");

const productConfigurationSchema = new Schema({
  product_item_id: {
    type: Schema.ObjectId,
    required: [true, "product item id is mandatory"],
    ref: "ProductItem",
  },
  variation_option_id: {
    type: Schema.ObjectId,
    required: [true, "Variation option id is mandatory"],
    ref: "VariationOption",
  },
});

const ProductConfiguration = model(
  "ProductConfiguration",
  productConfigurationSchema
);

module.exports = ProductConfiguration;
