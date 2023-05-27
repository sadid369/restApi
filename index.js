const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth/authRoutes");
const port = process.env.PORT || 4000;

app.use(express.json());
//routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
  connectDB();
});
