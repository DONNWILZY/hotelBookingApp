import mongoose from "mongoose";
//const {Schema} = mongoose;
  
const hotelsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    type:{
        type: String,
       required: true,
    },

    city:{
        type: String,
        required: true,
    },

    address:{
        type: String,
       required: true,
    },

    distance:{
        type: String,
       required: true,
    },

    title:{
        type: String,
       required: true,
    },
    Image :{
        type: [String],
    },

    desc:{
        type: String,
       required: true,
    },

    rating:{
        type: Number,
        min:1,
        max:5

    },

    rooms:{
        type: [String]
    },

    cheapestPrice:{
        type: String,
      required: true,
    },

    featured:{
        type: String,
        default: false,
    },
    badge:{
        type: String,
        default:false,
    },

},
{timestamps: true}
)


export default mongoose.model("Hotel", hotelsSchema)