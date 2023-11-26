const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "User",
    },
    ordered_product_id: {
      type: Schema.ObjectId,
      required: [true, "User id is mandatory"],
      ref: "Order",
    },
    rating_value: {
      type: Number,
      required: [true, "Rating value is mandatory"],
      min: [1, "Rating value minimum 1"],
      max: [5, "Rating value maximum 5"],
    },
    comment: { type: String, required: [false, "Comment is mandatory"] },
  },
  { timestamps: true }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
