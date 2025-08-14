import mongoose from "mongoose";




const Phoneshema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required:true
    },
    model_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Model",
        required:true
    },
    price:{
        type:Number,
        required:true
    },color:{
        type:String,
        required:true
    },display:{
        type:String,
        required:true
    },ram:{
        type:String,
        required:true
    },memory:{
        type:String,
        required:true
    }
})

const Phone=mongoose.model("Phone",Phoneshema)

export default Phone