const User = require("../../models/users");
const bcrypt = require("bcrypt");
exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Something went wrong!" });
  }
};

//update Profile
exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated Successfully", updatedUser });
  } catch (error) {
    res.status(401).json({ message: "You van't Updated This Account" });
  }
};
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User Deleted Successfully", deletedUser });
  } catch (error) {
    res.status(401).json({ message: "You can't Deleted This Account" });
  }
};
