import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../errormgt/error.js";


////////// REGISTER AUTH
export const register = async(req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

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

/////////LOGIN
export const login = async (req, res, next)=>{

    try{
        const user = await User.findOne({username: req.body.username}) 
       // const userEmail = await User.findOne({email: req.body.email}) 
        if (!user) 
             return next(createError(404, "USER NOT FOUND!"))

        const IsPasswordCoorect = await bcrypt.compare(req.body.password, user.password)
        if (!IsPasswordCoorect)
            return next(createError(400, "wrong Password"))

            ////////// KEEP PASSWORD & ADMIN STATUS FROM DATABASE
            const {password, isAdmin, ...otherDetails} = user._doc
        res.json({
            status: 200,
            message: `logged in successfully`,
            data: otherDetails 
        })
        
    }catch(err){
        next(err);
    }
}