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
});

////UPDATE 
router.put("/:id", async (req, res)=>{
   
    try{
        const UpdatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.json({
            status: 200,
            message: UpdatedHotel
        })
        //catch blog for update
    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
});


/////DELETE
router.delete("/:id", async (req, res)=>{
   
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            message: "Hotel deleted succesfully"
        })
        //catch blog for delete
    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
});

//// GET

router.get("/:id", async (req, res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.json({
            status: 200,
            message: hotel
        })

    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
});


////GET ALL
router.get("/", async (req, res)=>{
    try{
        const hotelS = await Hotel.find();
        res.json({
            status: 200,
            message: hotelS
        })

    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
});







export default router