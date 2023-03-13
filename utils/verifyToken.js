
import jwt from 'jsonwebtoken';
import { createError } from "../errormgt/error.js";

//check if token exists
export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "This user is not authenticated"));
    } 

    /////// verify token if exist... check if it is correct
    jwt.verify(token, process.env.JWT_TOKEN, (err, user)=>{
        if (err)
            return next(createError(403, "Token is not valid or expired "))
        req.user = user;
        next();
    });
}






/*
//import { Jwt } from "jsonwebtoken";
import pkg from 'jsonwebtoken';
const { Jwt } = pkg;



////check if toke  exist
export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
    return next(createError(401, "This Userr is not authenticatd"));
    } 


    /////// verify token if exist... check if it is correct
Jwt.verify(token, process.env.JWT_TOKEN, (err, user)=>{
    if (err)
    return next(createError(403, "Token is not valid or expired "))
    req.user = user;
    next();
});
}

*/