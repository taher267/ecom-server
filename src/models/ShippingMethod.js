const { Schema, model } = require("mongoose");

const shoppingMethodSchema = new Schema(
  {
    name: {
      // Standard Express Priority
      type: String,
      required: [true, "The name or description of this shipping method"],
    },
    price: {
      type: Number,
      required: [true, "The price the user pays for this shipping method"],
    },
  }
  //   { timestamps: true }
);

const ShoppingMethod = model("ShoppingMethod", shoppingMethodSchema);

module.exports = ShoppingMethod;
