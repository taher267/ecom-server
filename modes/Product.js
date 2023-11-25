const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [true, "Product name is mandatory"],
  },
  description: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [false, "Product name is mandatory"],
  },
  category_id: {
    type: Schema.ObjectId,
    required: [true, "Category id is mandatory"],
    ref: "Category",
  },
  product_image: {
    type: String,
    required: [false, "Product image is mandatory"],
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
