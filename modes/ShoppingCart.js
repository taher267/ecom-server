const { Schema, model } = require("mongoose");

const shoppingCartSchema = new Schema({
  user_id: {
    type: Schema.ObjectId, // Credit Card  PayPal
    required: [true, "User id is mandatory"],
    ref: "User",
  },
});

const ShoppingCart = model("ShoppingCart", shoppingCartSchema);

module.exports = ShoppingCart;
