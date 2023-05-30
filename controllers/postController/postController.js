const Post = require("../../models/post");

const postController = async (req, res, next) => {
  const { title, body, username, category, photo } = req.body;
  try {
    const post = await Post.create({
      title,
      body,
      username,
      category,
      photo,
    });
    if (!post) {
      res.status(401).json({ message: "Not Correct Post" });
    }

    res.status(201).json({ message: "Your post created", post });
  } catch (error) {
    res.status(401).json({ message: "Some thing went wrong", error });
  }
};

module.exports = postController;
