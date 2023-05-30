const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth/authRoutes");
const userRouter = require("./routes/auth/userRouter");
const postRoute = require("./routes/auth/postRoute");
const port = process.env.PORT || 4000;

app.use(express.json());
//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
//post Routes
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
  connectDB();
});
