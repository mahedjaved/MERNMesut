import express from "express";
import userRouter from "./routes/user.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo database");
  })
  .catch((err) => {
    console.log("Error : " + err.message);
  });

// port 3000 is ideal
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use("/", userRouter);
