import express from "express";
import { createDashBoard } from "../controllers/dashboardController.js";
const router = express.Router()
import Dashboard from "../models/Dashboard.js";




////dashboard info
router.post("/update", createDashBoard);








export default router