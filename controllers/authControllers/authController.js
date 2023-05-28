const User = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  console.log(username, password);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({
        message: "User Not Found ",
      });
    }

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      return res.status(400).json({
        message: "Password not match",
      });
    }
    const token = await jwt.sign(
      { username, _id: user._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "2h" }
    );
    res.status(200).json({ message: "Login Successful!", token });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
    });
  }
};
