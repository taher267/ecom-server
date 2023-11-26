const { Schema, model } = require("mongoose");

const productItemSchema = new Schema({
  product_id: {
    type: Schema.ObjectId,
    required: [true, "Category id is mandatory"],
    ref: "Product",
  },
  SKU: {
    type: String,
    required: [true, "SKU is mandatory"],
  },
  qty_in_stock: {
    type: Number,
    required: [false, "ProductItem name is mandatory"],
  },
  product_image: {
    type: String,
    required: [false, "Product image is mandatory"],
  },
  price: {
    type: Number,
    required: [true, "Price is mandatory"],
  },
});

const ProductItem = model("ProductItem", productItemSchema);

module.exports = ProductItem;
