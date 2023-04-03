import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { createError } from "../errormgt/error.js";
const router = express.Router();
import Hotel from "../models/Hotels.js";
import { verifyAdmin, verifyVendor } from "../utils/verifyToken.js";


////CREATE NEW HOTEL
router.post("/", verifyAdmin, verifyVendor, createHotel);

////UPDATE 
router.put("/:id", verifyAdmin, verifyVendor, updateHotel);

/////DELETE
router.delete("/delete/:id", verifyAdmin, verifyVendor, deleteHotel);

//// GET
router.get("/find/:id", getHotel);

////GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);

export default router