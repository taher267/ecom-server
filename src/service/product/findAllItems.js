// const { customError } = require("../../utils/error");
const productRepo = require("../../repo/product");
const { query } = require("../../utils");
/**
 * Find all products
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
  const selection = [
    "id",
    "title",
    "description",
    "thumb",
    "html",
    "sub_category_id",
    "SKU",
    "qty_in_stock",
    "price",
    "images",
    "author",
    "updatedAt",
    "createdAt",
  ];

  
  const products = await productRepo.findAllItems({
    qry: filter,
    sortStr,
    limit,
    skip,
    select: selection,
  });
  // .populate({ path: "author", select: "name" })

  const data = query.getTransformedItems({
    items: products,
    selection,
    path: "/products",
  });

  // pagination
  // const totalItems = await productService.count({ search });
  const totalItems = products.length;
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
    products: data,
    totalItems,
    pagination,
    links,
  };
};

module.exports = findAllItems;
