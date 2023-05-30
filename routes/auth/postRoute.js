const postController = require("../../controllers/postController/postController");
const { authMiddleware } = require("../../middlewares/auth");

const postRoute = require("express").Router();

postRoute.post("/", authMiddleware, postController);

module.exports = postRoute;
