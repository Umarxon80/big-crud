import mongoose from "mongoose";




const Brandshema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export const Brand=mongoose.model("Brand",Brandshema)
