const {
  signup,
  login,
} = require("../../controllers/authControllers/authController");

const authRoute = require("express").Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/", login);

module.exports = authRoute;
