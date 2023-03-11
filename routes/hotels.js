import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { createError } from "../errormgt/error.js";
const router = express.Router();
import Hotel from "../models/Hotels.js";


////CREATE NEW HOTEL
router.post("/", createHotel);

////UPDATE 
router.put("/:id", updateHotel);

/////DELETE
router.delete("/:id", deleteHotel);

//// GET
router.get("/:id", getHotel);

////GET ALL
router.get("/", getAllHotels);

export default router