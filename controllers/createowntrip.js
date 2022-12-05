/** @format */

const {createowntrip}= require("../models/createowntrip")
//post api for create own trip
exports.postcreateowntrip = async (req, res, next) => {
    const owntrip = await new createowntrip(req.body);
    owntrip.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
        Data: doc,
      });
    });
  };
  exports.getcreateowntrip = async(req,res)=>{
    try{
        const owntrip = await createowntrip.find();
        res.send(owntrip)
    }catch(e){
        res.send(e);
    }
}
exports.deletecreateowntrip = async(req,res)=>{
    try{
     const id = req.params.id;
     const deleteeowntrip= await createowntrip.findByIdAndDelete(id)
     if(!id)
     {
         return res.status(400).send();
     }else{
         res.send(deleteeowntrip);
     }
    }catch(e){
     res.status(500).send(e);
    }
 }
 exports.editcreateowntrip = async(req,res)=>{
    try{
        const id = req.params.id;
        const editcreateowntrip = await createowntrip.findByIdAndUpdate(id,req.body,{new:true});
        res.send(editcreateowntrip)
    }catch(e){
        res.send(e);
    }
}
