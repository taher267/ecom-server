const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [true, "Name is mandatory"],
  },
  description: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [false, "Description is mandatory"],
  },
  html: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [false, "HTML is mandatory"],
  },
  sub_category_id: {
    type: Schema.ObjectId,
    required: [true, "Sub Category id is mandatory"],
    ref: "SubCategory",
  },
  SKU: {
    type: String,
    required: [true, "SKU is mandatory"],
  },
  qty_in_stock: {
    type: Number,
    required: [false, "ProductItem name is mandatory"],
  },
  thumb: {
    type: String,
    required: [false, "Product image is mandatory"],
  },
  price: {
    type: Number,
    required: [true, "Price is mandatory"],
  },
  images: [
    {
      type: String,
      required: [false, "Product image is mandatory"],
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = Product;
