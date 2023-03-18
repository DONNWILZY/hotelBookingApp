import express from "express";
import { createDashBoard } from "../controllers/dashboardController.js";
const router = express.Router()
import Dashboard from "../models/Dashboard.js";




////dashboard info
router.post("/update", createDashBoard);

router.post("/edit", createDashBoard);

router.post("/delete", createDashBoard);

router.post("/viewId", createDashBoard);

router.post("/viewall", createDashBoard);









export default router