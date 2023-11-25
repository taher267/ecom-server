const { Schema, model } = require("mongoose");

const orderLineSchema = new Schema(
  {
    product_item_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "productItem",
    },
    order_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "Order",
    },
    qty: {
      // total ordered products
      type: Number,
      required: [true, "Total product quantitis is mandatory"],
      ref: "Order",
    },
    price: {
      // total ordered products prices
      type: Number,
      required: [true, "Total product price is mandatory"],
      ref: "Order",
    },
  },
  { autoIndex: true }
);

const OrderLine = model("OrderLine", orderLineSchema);

module.exports = OrderLine;
