const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");
const { controllers: productControllers } = require("../api/v1/product");
const { controllers: userControllers } = require("../api/v1/user");

const v1 = `/api/v1`;
// AUTH
router.route(`${v1}/auth/login`).post(authControllers.login);
router.route(`${v1}/auth/register`).post(authControllers.register);
// User

router
  .route(`${v1}/users`)
  /**
   * Private Route with ADMIN
   * @method POST
   * @route base_url/api/v1/users
   */
  .post(userControllers.create)
  /**
   * Private Route With Admin
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
  .get(userControllers.findSingleItem)
  /**
   * Private Route
   * @method DELETE
   * @route base_url/api/v1/users
   */
  .delete(userControllers.removeItem)
  /**
   * Private Route with ADMIN
   * @method PUT
   * @route base_url/api/v1/users
   */
  .put(userControllers.updateItem)
  /**
   * Private Route
   * @method PATCH
   * @route base_url/api/v1/users
   */
  .patch(userControllers.updateItemPatch);
router
  .route(`${v1}/users/:id/update-profile`)
  .patch(userControllers.profileChange);

// Product
router
  .route(`${v1}/products`)
  .post(productControllers.create)
  .get(productControllers.findAllItems);

module.exports = router;
