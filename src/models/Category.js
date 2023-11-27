const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"],
  },
  description: {
    type: String,
    required: [false, "Description id is mandatory"],
  },
});

const Category = model("Category", categorySchema);

module.exports = Category;
