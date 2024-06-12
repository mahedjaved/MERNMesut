import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
// port 3000 is ideal
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use("/", userRouter);
