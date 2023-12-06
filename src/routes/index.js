const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");
const { controllers: productControllers } = require("../api/v1/product");
const { controllers: userControllers } = require("../api/v1/user");

const v1 = `/api/v1`;
// AUTH
/**
 * @route baseurl/api/v1/auth/register
 * @method POST
 */
router.route(`${v1}/auth/register`).post(authControllers.register);

/**
 * @route baseurl/api/v1/auth/login
 * @method POST
 */
router.route(`${v1}/auth/login`).post(authControllers.login);

/**
 * @route baseurl/api/v1/auth/register-with-link
 * @method POST
 */
router
  .route(`${v1}/auth/register-with-link`)
  .post(authControllers.registerWithLink);
/**
 * @route baseurl/api/v1/auth/register-link-varification
 * @method POST
 */
router
  .route(`${v1}/auth/register-link-varification`)
  .post(authControllers.registerValificationWithLink);

/**
 * @route baseurl/api/v1/auth/forget-password
 * @method POST
 */
router.route(`${v1}/auth/forget-password`).post(authControllers.forgetPassword);

/**
 * @route baseurl/api/v1/auth/reset-password
 * @method POST
 */
router.route(`${v1}/auth/reset-password`).post(authControllers.resetPassword);

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
/**
 * @route baseurl/api/v1/users/set-password
 * @method POST
 */
router.route(`${v1}/users/set-password`).post(userControllers.setPassword);
/**
 * @route baseurl/api/v1/users/update-password
 * @method POST
 */
router
  .route(`${v1}/users/update-password`)
  .post(userControllers.updatePassword);
// Product
router
  .route(`${v1}/products`)
  .post(productControllers.create)
  .get(productControllers.findAllItems);

module.exports = router;
