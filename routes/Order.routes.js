import { Router } from "express";
import { Order } from "../models/Order.js";


const OrderRouter=Router()

OrderRouter.get("", async (req, res) => {
  try {
    let data = await Order.find().populate("customer_id");
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

OrderRouter.post("", async (req, res) => {
    let body=req.body
    try {
      let Nline = new Order(body);
      await Nline.save()
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
OrderRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Order.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Order mavjud emas"})
        }
      let Nline = await Order.findByIdAndUpdate(id,body,{new:true});
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  OrderRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Order.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Order mavjud emas"})
        }
      let deleted = await Order.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
export default OrderRouter