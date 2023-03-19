import Rooms from "../models/Rooms";
import Hotels from "../models/Hotels";
import { createError } from "../errormgt/error";



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

