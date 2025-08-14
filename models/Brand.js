import mongoose from "mongoose";




const Brandshema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const Brand=mongoose.model("Brand",Brandshema)

export default Brand