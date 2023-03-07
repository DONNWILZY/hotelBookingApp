import express from "express";
const router = express.Router()



router.get("/", (req, res)=>{
    res.send("this is my my Auth route")
})








export default router