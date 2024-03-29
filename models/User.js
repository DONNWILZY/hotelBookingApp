import mongoose from "mongoose";
//const {Schema} = mongoose;
  
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        unique: true
    },

    country:{
        type: String,
       
    },

    city:{
        type: String,
    },

    password:{
        type: String,
        required: true,

    },
    isAdmin:{
        type: Boolean,
        default: false
    },

    isVendor:{
        type: Boolean,
        default: false
    },
    

}, 

{timestamps: true}

);


export default mongoose.model("User", userSchema)