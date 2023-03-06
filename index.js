import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

/*
//database connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=>console.log('db connected'));
*/

const connect = async ()=>{
try{
    await mongoose.connect(process.env.DATABASE_URL , {useNewUrlParser:true});
    console.log("connected to db")
}catch(error){
   throw error;
}
};


////////////// ON CONNECTION & ON DISCONNECTION DISPLAY THE FOLLOWING
mongoose.connection.on("disconnected", ()=>{
console.log('MongoDB disconnected')
})

mongoose.connection.on("connected", ()=>{
    console.log('MongoDB connected successfully')
    })



/// Call .env function
dotenv.config()

/// Database connection funtion
connect();


app.get('/', (req, res)=>{
   // res.send('hello world')
   console.log('hello')
})

 

app.listen(PORT, ()=>{
    console.log(`lOCAL Server runnung on PORT ${PORT}`)
})