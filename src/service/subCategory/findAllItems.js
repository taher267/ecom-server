// const { customError } = require("../../utils/error");
const subCategoryRepo = require("../../repo/subCategory");
const { query } = require("../../utils");
/**
 * Find all categories
 * Pagination
 * Searching
 * Sorting
 * @param{*} param0
 * @returns
 */
const findAllItems = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
  request = {},
}) => {
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;
  const filter = {
    // title: { $regex: search, $options: "i" },
  };

  const skip = page * limit - limit;
  const selection = ["id", "name", "description", "category_id"];

  const categories = await subCategoryRepo.findAllItems({
    qry: filter,
    sortStr,
    limit,
    skip,
    select: selection,
  });
  // .populate({ path: "author", select: "name" })

  const data = query.getTransformedItems({
    items: categories,
    selection,
    path: "/categories",
  });

  // pagination
  // const totalItems = await categorieservice.count({ search });
  const totalItems = categories.length;
  const pagination = query.getPagination({ totalItems, limit, page });

  // HATEOAS Links
  const links = query.getHATEOASForAllItems({
    url: request.url,
    path: request.path,
    query: request.query,
    hasNext: !!pagination.next,
    hasPrev: !!pagination.prev,
    page,
  });
  return {
    categories: data,
    totalItems,
    pagination,
    links,
  };
};

module.exports = findAllItems;
