const { Schema, model } = require("mongoose");

const promotionSchema = new Schema({
  name: {
    // Occation
    type: String,
    required: [true, "name is mandatory"],
  },
  description: {
    // Occation Description
    type: String,
    required: [false, "Description is mandatory"],
  },
  discount_type: {
    type: String,
    required: [true, "Discount type id is mandatory"],
    enum: ["flat", "percentage"],
  },
  discount_rate: {
    type: Number,
    required: [true, "Discount rate is mandatory"],
  },
  start_date: {
    type: Date,
    required: [false, "Start date is mandatory"],
  },
  end_date: {
    type: Date,
    required: [false, "End date is mandatory"],
  },
});

const Promotion = model("Promotion", promotionSchema);

module.exports = Promotion;
