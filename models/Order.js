import mongoose from "mongoose";




const Ordershema= new mongoose.Schema({
    total_price:{
        type:Number,
        required:true
    },
    order_date:{
        type:Date,
    },
    order_status:{
        type:Boolean,
        required:true
    },
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required:true
    }
})

const Order=mongoose.model("Order",Ordershema)

export default Order