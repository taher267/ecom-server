const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"],
    trim: true,
    unique: true,
    // index: 1,
  },
  description: {
    type: String,
    required: [false, "Description is mandatory"],
  },
});
const Category = model("Category", categorySchema);

module.exports = Category;
