const { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY, NODE_ENV } = process.env;
const setAccessAndRefreshToken = (
  res,
  { accessToken = "", refreshToken = "", setAccess = false, setRefresh = false }
) => {
  const cookieCommon = {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: NODE_ENV === "production" ? "None" : "Strict",
  };

  if (setAccess && accessToken) {
    res.cookie("accessToken", accessToken, {
      maxAge: Number(ACCESS_TOKEN_EXPIRY),
      ...cookieCommon,
    });
  }
  if (setRefresh && refreshToken) {
    res.cookie("refreshToken", refreshToken, {
      maxAge: Number(REFRESH_TOKEN_EXPIRY),
      ...cookieCommon,
    });
  }
};
module.exports = { setAccessAndRefreshToken };
