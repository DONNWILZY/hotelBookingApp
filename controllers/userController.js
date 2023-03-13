//import Hotel from "../models/User.js";
import User from "../models/User.js";

/////CREATE HOTEL
export const createUser = async (req, res, next) =>{
    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save();
        res.json({
            status: 200,
            message: "successfully Created New Hotel",
            data: savedUser
        });

    }catch(err){
        next(err);
    }
}

////// UPDATE HOTEL
export const updateUser = async (req, res, next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
          res.json({
            status: 200,
            message: `User with ID ${req.params.id} updated`,
            data: updatedUser,
          });
        //catch blog for update
    }catch(err){
        next(err);
    }
}

/////DELETE HOTEL
export const deleteUser = async (req, res, next) =>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            message: `Hotel with ID:  ${req.params.id} deleted succesfully`
        })
        //catch blog for delete
    }catch(err){
        next(err);
    }
}


/////// GET HOTEL BY ID
export const getUser = async (req, res, next) =>{
    try{
        const user = await User.findById(req.params.id);
        res.json({
            status: 200,
            message: `User with this ID(s) ${req.params.id} found`,
            data: user
        })

    }catch(err){
        next(err);
    }
}

/////GET ALL HOTELS
export const getAllUsers = async (req, res, next) =>{
    try{
        const users = await User.find();
        res.json({
            status: 200,
            message: users
        })

    }catch(err){
        next(err);
    }
}