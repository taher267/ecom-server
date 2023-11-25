const { Schema, model } = require("mongoose");

const promotionCategorySchema = new Schema({
  category_id: {
    type: Schema.ObjectId,
    required: [true, "Category id is mandatory"],
    ref: "Category",
  },
  promotion_id: {
    type: Schema.ObjectId,
    required: [true, "Promotion id is mandatory"],
    ref: "Promotion",
  },
});

const PromotionCategory = model("PromotionCategory", promotionCategorySchema);

module.exports = PromotionCategory;
