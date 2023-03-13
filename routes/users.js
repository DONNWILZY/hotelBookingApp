import express from "express";
const router = express.Router();

///// IMPORT CONTROLLERS FROM userController.js
import { createUser, deleteUser, updateUser, getUser, getAllUsers} from "../controllers/userController.js";

///// IMPORT error FROM errormgt/error.js
import { createError } from "../errormgt/error.js";

///// Import User from  ../models/User.js
import User from "../models/User.js";


////CREATE NEW HOTEL
router.post("/", createUser);

////UPDATE 
router.put("/:id", updateUser);

/////DELETE
router.delete("/:id", deleteUser);

//// GET
router.get("/:id", getUser);

////GET ALL
router.get("/", getAllUsers);

export default router;