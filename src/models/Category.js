const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    //Clothing Men's Shoes Hair Products
    type: String,
    required: [true, "Payment type id is mandatory"],
    ref: "PaymentType",
  },
  parent_category_id: {
    type: Schema.ObjectId,
    required: [false, "User id is mandatory"],
    ref: "Category",
  },
});

const Category = model("Category", categorySchema);

module.exports = Category;
