import express from "express";
import {test} from '../controllers/user.controller.js'; 

// create object of a route
const router = express.Router();

// set the get request
router.get("/", test);

export default router;