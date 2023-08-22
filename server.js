import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connet = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(first)(error);
  }
};

app.listen(8800, () => {
  connet();
  console.log("Backend server is running");
});
