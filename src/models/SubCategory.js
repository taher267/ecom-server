const { Schema, model } = require("mongoose");

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Sub Category is mandatory"],
  },
  description: {
    type: String,
    required: [false, "Description id is mandatory"],
  },
  category_id: {
    type: Schema.ObjectId,
    required: [true, "Category id is mandatory"],
    ref: "Category",
  },
});

const SubCategory = model("SubCategory", subCategorySchema);

module.exports = SubCategory;
