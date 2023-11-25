const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "User",
    },
    order_date: {
      type: Date,
      required: [true, "Order date is mandatory"],
      default: Date.now,
    },
    payment_method_id: {
      type: Schema.ObjectId,
      required: [true, "payment method id is mandatory"],
      ref: "PaymentMethod",
    },
    shipping_address: {
      type: Schema.ObjectId,
      required: [true, "Shipping address id is mandatory"],
      ref: "Address",
    },
    shipping_method: {
      type: Schema.ObjectId,
      required: [true, "Shipping method id is mandatory"],
      ref: "ShippingMethod",
    },
    order_total: {
      type: Number,
      required: [true, "order status id is mandatory"],
    },
    order_status: {
      type: String,
      required: [true, "order status id is mandatory"],
      ref: "OrderStatus",
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = Order;
