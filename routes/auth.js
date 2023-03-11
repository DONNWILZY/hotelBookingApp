 import express from "express";
const router = express.Router()
import { register } from "../controllers/authController.js";
import bcrypt from "bcrypt"

////// REGISTER
router.post("/register", register   )

///////SIGNIN
router.get("/sign", (req, res)=>{
    
})

//////// VERIFICATION
router.get("/token", (req, res)=>{
    
})








export default router