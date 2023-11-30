const productService = require("../../../../service/product");

const create = async (req, res, next) => {
  const {
    title,
    description,
    html,
    images,
    price,
    qty_in_stock,
    SKU,
    sub_category_id,
    thumb,
  } = req.body;

  try {
    const product = await productService.createItem({
      title,
      description,
      html,
      images,
      price,
      qty_in_stock,
      SKU,
      sub_category_id,
      thumb,
      author: req.user.id,
    });

    const response = {
      code: 201,
      message: "Product Created Successfully",
      data: { ...product },
      links: {
        self: `/products/${product.id}`,
        reviews: `/products/${product.id}/reviews`,
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = create;
