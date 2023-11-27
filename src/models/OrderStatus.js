const { Schema, model } = require("mongoose");

const orderStatusSchema = new Schema({
  status: {
    type: String,
    required: [true, "User id is mandatory"],
    enum: ["Ordered", "In Transit", "Delivered", "Cancelled"],
  },
});

const OrderStatus = model("OrderStatus", orderStatusSchema);

module.exports = OrderStatus;
