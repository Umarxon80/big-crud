import mongoose from "mongoose";




const Order_detailshema= new mongoose.Schema({
    quantity:{
        type:Number,
        required:true
    },
    order_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required:true
    },
    phone_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phone",
        required:true
    }
})

const Order_detail=mongoose.model("Order_detail",Order_detailshema)

export default Order_detail