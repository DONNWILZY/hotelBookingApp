import express from "express";
import { createRoom, updateRoomAvailability,  updateRoom, deleteRoom, getAllRooms, getRoom } from "../controllers/roomController.js";
const router = express.Router()
import {verifyAdmin, verifyVendor} from "../utils/verifyToken.js"


////CREATE NEW HOTEL
router.post("/:hotelid", verifyAdmin, verifyVendor, createRoom);

////UPDATE 
router.put("/:id", verifyAdmin, verifyVendor, updateRoom);

////UPDATE AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);

/////DELETE
router.delete("/:id/:hotelid", verifyAdmin, verifyVendor, deleteRoom);

//// GET
router.get("/:id", getRoom);

////GET ALL
router.get("/", getAllRooms);
 

export default router