const { Schema, model } = require("mongoose");

const paymentMethodSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "User",
    },
    payment_type_id: {
      type: Schema.ObjectId,
      required: [true, "Payment type id is mandatory"],
      ref: "PaymentType",
    },
    provider: {
      type: String,
      required: [false, "provider is mandatory"],
    },
    account_number: {
      type: String,
      required: [false, "Account number is mandatory"],
    },
    expiry_date: { type: Date, required: [false, "Expiry date is mandatory"] },
    is_default: { type: String, required: [false, "Is default is mandatory"] },
  },
  { timestamps: true }
);

const PaymentMethod = model("PaymentMethod", paymentMethodSchema);

module.exports = PaymentMethod;
