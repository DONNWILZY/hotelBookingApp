import Rooms from "../models/Rooms.js";
import Hotels from "../models/Hotels.js";
import { createError } from "../errormgt/error.js";



export const createRoom = async (req, res, next)=>{
    ///// Import Hotel ID
    const hoteld = rq.params.hoteld;


    //// CREATE NEW ROOM
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotels.findByIdAndUpdate(hoteld, {$push : {rooms: savedRoom._id}})
        }catch(err){
            next();
        }
        res.json({
            status: 200,
            Message: "room added with number",
            data: savedRoom,
        })
    }catch(err){
        next()
    }
}

////// UPDATE HOTEL
export const updateRoom = async (req, res, next) =>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
          );
          res.json({
            status: 200,
            message: `Room with ID ${req.params.id} updated`,
            data: updatedRoom,
          });
        //catch blog for update
    }catch(err){
        next(err);
    }
}

/////DELETE HOTEL
export const deleteRoom = async (req, res, next) =>{
    try{
        await Room.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            message: `Room with ID:  ${req.params.id} deleted succesfully`
        })
        //catch blog for delete
    }catch(err){
        next(err);
    }
}


/////// GET HOTEL BY ID
export const getRoom = async (req, res, next) =>{
    try{
        const Room = await Room.findById(req.params.id);
        res.json({
            status: 200,
            message: `hotel with this ID(s) ${req.params.id} found`,
            data: room
        })

    }catch(err){
        next(err);
    }
}

/////GET ALL Rooms
export const getAllRooms = async (req, res, next) =>{
    try{
        const rooms = await Room.find();
        res.json({
            status: 200,
            message: rooms
        })

    }catch(err){
        next(err);
    }
}
