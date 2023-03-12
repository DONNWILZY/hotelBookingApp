import mongoose from "mongoose";
//const {Schema} = mongoose;
  
const dashboardSchema = new mongoose.Schema({
    phone:{
        type: String,
        required: true,
        unique: true
    },

    location:{
        type: String,
        required: true,
        unique: true
    },

    gender:{
        type: String,
        required: true,

    },

    dateOfBirth:{
        type: Date,
        required: true,
        
    },

    country:{
        type: String,

    },
    
    state:{
        type: String,

    },

    kyc:{
        type: String
    }
});


export default mongoose.model("Dashboard", dashboardSchema)