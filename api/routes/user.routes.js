import express from "express";

// create object of a route
const router = express.Router();

// set the get request
router.get("/", (req, res) => {
  console.log("Hello World");
});

export default router;