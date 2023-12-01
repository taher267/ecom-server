const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");
const { controllers: productControllers } = require("../api/v1/product");
const { controllers: userControllers } = require("../api/v1/user");

const v1 = `/api/v1`;
// AUTH
router.route(`${v1}/auth/login`).post(authControllers.login);
// User

router
  .route(`${v1}/users`)
  /**
   * Private Route
   * @method POST
   * @route base_url/api/v1/users
   */
  .post(userControllers.create)
  /**
   * Private Route
   * @method GET
   * @route base_url/api/v1/users
   */
  .get(userControllers.findAllItems);
router
  .route(`${v1}/users/:id`)
  /**
   * Private Route
   * @method GET
   * @route base_url/api/v1/users/:id
   */
  .get(userControllers.findSingleItem);

// Product
router
  .route(`${v1}/products`)
  .post(productControllers.create)
  .get(productControllers.findAllItems);

module.exports = router;
