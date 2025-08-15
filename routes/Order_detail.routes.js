import { Router } from "express";
import { Order_detail } from "../models/Order_detail.js";


const Order_detailRouter=Router()
Order_detailRouter.get("", async (req, res) => {
  try {
    let data = await Order_detail.find().populate("phone_id").populate("order_id");
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

Order_detailRouter.post("", async (req, res) => {
    let body=req.body
    try {
      let Nline = new Order_detail(body);
      await Nline.save()
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
Order_detailRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Order_detail.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Order_detail mavjud emas"})
        }
      let Nline = await Order_detail.findByIdAndUpdate(id,body,{new:true});
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  Order_detailRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Order_detail.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Order_detail mavjud emas"})
        }
      let deleted = await Order_detail.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

export default Order_detailRouter