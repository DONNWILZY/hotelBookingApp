import Rooms from "../models/Rooms";
import Hotels from "../models/Hotels";
import { createError } from "../errormgt/error";



export const createRoom = async (req, res, next)=>{
    ///// Import Hotel ID
    const hoteld = rq.params.hoteld;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save();
        try{

        }catch(err){

        }
    }catch(err){
        next()
    }
}

