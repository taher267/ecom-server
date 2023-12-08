const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");
const { controllers: productControllers } = require("../api/v1/product");
const { controllers: userControllers } = require("../api/v1/user");

const v1 = `/api/v1`;

/*=============================================
=            Auth            =
=============================================*/

/**
 * @route baseurl/api/v1/auth/register
 * @method POST
 */
router.route(`${v1}/auth/register`).post(authControllers.register);
/**
 * @route baseurl/api/v1/auth/login-or-register-with-google
 * @method POST
 */
router
  .route(`${v1}/auth/login-or-register-with-google`)
  .post(authControllers.loginOrRegisterWithGoogle);

/**
 * @route baseurl/api/v1/auth/register-with-google
 * @method POST
 */
router
  .route(`${v1}/auth/register-with-google`)
  .post(authControllers.registerWithGoogle);

/**
 * @route baseurl/api/v1/auth/register-with-google
 * @method POST
 */
router
  .route(`${v1}/auth/loging-with-google`)
  .post(authControllers.loginWithGoogle);

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
/**
 * @route baseurl/api/v1/auth/refresh
 * @method POST
 */
router
  .route(`${v1}/auth/refresh`)
  .get(authControllers.getAccessTokenByRefreshToken);
/**
 * @route baseurl/api/v1/auth/logout
 * @method DELETE
 */
router
  .route(`${v1}/auth/logout`)
  .delete(authControllers.getAccessTokenByRefreshToken);

/*=====  End of Auth  ======*/

/*=============================================
=            User            =
=============================================*/

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
   * @route base_url/api/v1/users/:id
   */
  .delete(userControllers.removeItem)
  /**
   * Private Route with ADMIN
   * @method PUT
   * @route base_url/api/v1/users/:id
   */
  .put(userControllers.updateItem)
  /**
   * Private Route
   * @method PATCH
   * @route base_url/api/v1/users/:id
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
/*=====  End of Uer  ======*/
/*=============================================
=            Product            =
=============================================*/

router
  .route(`${v1}/products`)
  .post(productControllers.create)
  .get(productControllers.findAllItems);

module.exports = router;

/*=====  End of Product  ======*/
