import User from "../models/User.js";


////////// REGISTER AUTH
export const register = async(req, res, next)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

    await newUser.save();
    res.json({
        status: 200,
        message: "User has been created successfully",
        data: newUser
    })
    }catch(err){
        next(err)
    }

}