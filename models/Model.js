import mongoose from "mongoose";




const Modelshema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required:true
    }
})

export const Model=mongoose.model("Model",Modelshema)

