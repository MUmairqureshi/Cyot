/** @format */

const { contactUs } = require("../models/contactUs");

//post api for contactus details.
exports.contactus = async (req, res, next) => {
    const contact = await new contactUs(req.body);
    contact.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
        Data: doc,
      });
    });
  };
  //get api for contactus detail.
  exports.getcontact = async(req,res)=>{
    try{
        const contactData = await contactUs.find();
        res.send(contactData)
    }catch(e){
        res.send(e);
    }
}
exports.deletecontact = async(req,res)=>{
    try{
     const id = req.params.id;
     const deletecontact = await contactUs.findByIdAndDelete(id)
     if(!id)
     {
         return res.status(400).send();
     }else{
         res.send(deletecontact);
     }
    }catch(e){
     res.status(500).send(e);
    }
 }
 exports.editcontact = async(req,res)=>{
    try{
        const id = req.params.id;
        const editcontact = await contactUs.findByIdAndUpdate(id,req.body,{new:true});
        res.send(editcontact)
    }catch(e){
        res.send(e);
    }
}