import mongoose from "mongoose";
//const {Schema} = mongoose;
  
const kycSchema = new mongoose.Schema({
    nin:{
        type: String,
        required: true,
        unique: true
    },
    surname:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    middleNAme:{
        type: String,

    },
    Country:{
        type: String,
        required: true,
    },
    State:{
        type: String,
        required: true,
    },
    City:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },

    idPhoto:{
        type: String,
        required: true,
    },
},
{timestamps: true}
)


export default mongoose.model("Hotel", kycSchema)