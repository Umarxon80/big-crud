import { Router } from "express";
import { Model } from "../models/Model.js";


const ModelRouter=Router()
ModelRouter.get("", async (req, res) => {
  try {
    let data = await Model.find().populate("brand_id");
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

ModelRouter.post("", async (req, res) => {
    let body=req.body
    try {
        let checker=await Model.findOne({name:body.name})        
        if (checker) {
            return res.send({message:"Bunday model mavjud"})
        }
      let Nline = new Model(body);
      await Nline.save()
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
ModelRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Model.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Model mavjud emas"})
        }
      let Nline = await Model.findByIdAndUpdate(id,body,{new:true});
      res.send(Nline);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  ModelRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Model.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday Model mavjud emas"})
        }
      let deleted = await Model.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

export default ModelRouter