const User = require("../../models/users");
const bcrypt = require("bcrypt");
//signup
exports.signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { name, username, email, password, profile } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `Hello ${name}! Your account has been created! `,
      user,
    });
  } catch (error) {
    res.status(401).json({ message: "Something went wrong", error });
  }
};

//login

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({
        message: "User Not Found",
      });
    }

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      res.status(400).json({
        message: "Password not match",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
    });
  }
};
