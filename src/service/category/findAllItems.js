// const { customError } = require("../../utils/error");
const categoryRepo = require("../../repo/category");
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
    // name: { $regex: search, $options: "i" },
  };

  const skip = page * limit - limit;
  const selection = ["id", "name", "description"];

  const categories = await categoryRepo.findAllItems({
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
    path: "/category",
  });

  // pagination
  // const totalItems = await categorieService.count({ search });
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
