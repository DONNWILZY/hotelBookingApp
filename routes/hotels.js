import express from "express";
const router = express.Router();
import Hotel from "../models/Hotels.js";



////CREATE NEW HOTEL
router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedhotel = await newHotel.save();
        res.json({
            status: 200,
            message: savedhotel
        })

    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
})

////UPDATE 


/////DELETE


//// GET

////GET ALL







export default router