const { Schema, model } = require("mongoose");

const paymentMethodSchema = new Schema(
  {
    value: {
      type: String, // Credit Card  PayPal
      required: [true, "Value is mandatory"],
    },
  },
  { versionKey: false }
);

const PaymentType = model("PaymentType", paymentMethodSchema);

module.exports = PaymentType;
