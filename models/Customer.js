import mongoose from "mongoose";




const Customershema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_number:{
        type: String
    }
})

const Customer=mongoose.model("Customer",Customershema)

export default Customer