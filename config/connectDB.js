var mongoose = require("mongoose");
//Set up default mongoose connection

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
    console.log("Mongodb Connect Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
  }
};

module.exports = connectDB;
