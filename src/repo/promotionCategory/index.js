const { PromotionCategory } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return PromotionCategory.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return PromotionCategory.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return PromotionCategory.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return PromotionCategory.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return PromotionCategory.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return PromotionCategory.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return PromotionCategory.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return PromotionCategory.deleteMany({});
};

module.exports = {
  findAllItems,
  findItem,
  findItemById,
  updateItem,
  updateItemById,
  deleteItem,
  deleteItemById,
  deleteManyItem,
};
