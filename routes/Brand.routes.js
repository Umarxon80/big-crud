import { Router } from "express";
import { Brand } from "../models/Brand.js";

const BrandRouter = Router();
BrandRouter.get("", async (req, res) => {
  try {
    let data = await Brand.find();
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

BrandRouter.post("", async (req, res) => {
    let body=req.body
    try {
        let checker=await Brand.findOne({name:body.name})        
        if (checker) {
            return res.send({message:"Bunday brand mavjud"})
        }
      let Newbrand = new Brand(body);
      await Newbrand.save()
      res.send(Newbrand);
    } catch (e) {
      res.send({ message: e.message });
    }
  });
BrandRouter.patch("/:id", async (req,res)=>{
    let {id}=req.params
    let body=req.body
    try {
        let checker=await Brand.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday brand mavjud emas"})
        }
      let Newbrand = await Brand.findByIdAndUpdate(id,body,{new:true});
      res.send(Newbrand);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

  BrandRouter.delete("/:id", async (req,res)=>{
    let {id}=req.params
    try {
        let checker=await Brand.findOne({_id:id})        
        if (!checker) {
            return res.send({message:"Bunday brand mavjud emas"})
        }
      let deleted = await Brand.findByIdAndDelete(id);
      res.send(deleted);
    } catch (e) {
      res.send({ message: e.message });
    }
  });

export default BrandRouter;
