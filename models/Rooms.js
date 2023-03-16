import mongoose from "mongoose";
//const {Schema} = mongoose;
  
const kycSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    maxPeole:{
        type: String,
        required: true,
    },
    desc:{
        type: String,

    },
    roomNumbers:[{number: Number, UnavailabbleDate: {type:[Date]}}],
    
}, {timestamps: true}
)


export default mongoose.model("Hotel", kycSchema)