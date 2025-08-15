import { Router } from "express";
import { Customer } from "../models/Customer.js";


const CustomerRouter=Router()


CustomerRouter.get("", async (req, res) => {
  try {
    let data = await Customer.find();
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

CustomerRouter.post("", async (req, res) => {
    let body=req.body
    try {
        let checker=await Customer.findOne({name:body.name})        
        if (checker) {
            return res.send({message:"Bunday Customer mavjud"})
        }
      let Nline = new Customer(body);
      await Nline.save()
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
CustomerRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Customer.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Customer mavjud emas"})
        }
      let Nline = await Customer.findByIdAndUpdate(id,body,{new:true});
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  CustomerRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Customer.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Customer mavjud emas"})
        }
      let deleted = await Customer.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

export default CustomerRouter

