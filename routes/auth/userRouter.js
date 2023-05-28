const {
  getAllUser,
} = require("../../controllers/authControllers/userController");
const { authMiddleware } = require("../../middlewares/auth");

const userRouter = require("express").Router();

userRouter.get("/", authMiddleware, getAllUser);

module.exports = userRouter;
