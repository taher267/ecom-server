const { Schema, model } = require("mongoose");

const shoppingCartItemSchema = new Schema({
  cart_id: {
    type: Schema.ObjectId,
    required: [true, "cart id is mandatory"],
    ref: "Cart",
  },
  product_item_id: {
    type: Schema.ObjectId,
    required: [true, "product item id is mandatory"],
    ref: "ProductItem",
  },
  qty: {
    type: Number,
    required: [true, "Product Quantity is mandatory"],
  },
});

const ShoppingCartItem = model("ShoppingCartItem", shoppingCartItemSchema);

module.exports = ShoppingCartItem;
