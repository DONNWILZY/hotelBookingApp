import express from "express";
import { createError } from "../errormgt/error.js";
const router = express.Router();
import Hotel from "../models/Hotels.js";



////CREATE NEW HOTEL
router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedhotel = await newHotel.save();
        res.json({
            status: 200,
            message: "successfully Created New Hotel",
            data: savedhotel
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
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: value },
            { new: true }
          );
          res.json({
            status: 200,
            message: `Hotel with ID ${req.params.id} updated`,
            data: updatedHotel,
          });
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
            message: `Hotel with ID:  ${req.params.id} deleted succesfully`
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
            message: `hotel with this ID(s) ${req.params.id} found`,
            data: hotel
        })

    }catch(err){
        res.json({
            status: 500,
            message: err
        })
    }
});


////GET ALL
router.get("/", async (req, res, next)=>{
    try{
        const hotels = await Hotel.find();
        res.json({
            status: 200,
            message: hotels
        })

    }catch(err){
        console.log(err)
       next(err)
    }
});

export default router