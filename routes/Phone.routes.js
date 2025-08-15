import { Router } from "express";
import { Phone } from "../models/Phone.js";


const PhoneRouter=Router()
PhoneRouter.get("", async (req, res) => {
  try {
    let data = await Phone.find().populate("brand_id").populate("model_id");
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

PhoneRouter.post("", async (req, res) => {
    let body=req.body
    try {
        let checker=await Phone.findOne({name:body.name})        
        if (checker) {
            return res.send({message:"Bunday Phone mavjud"})
        }
      let Nline = new Phone(body);
      await Nline.save()
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
PhoneRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Phone.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Phone mavjud emas"})
        }
      let Nline = await Phone.findByIdAndUpdate(id,body,{new:true});
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  PhoneRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Phone.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Phone mavjud emas"})
        }
      let deleted = await Phone.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

export default PhoneRouter