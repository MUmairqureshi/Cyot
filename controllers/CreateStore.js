const {CreateStore}  = require("../models/CreateStore")
const multer  = require("multer")


exports.getCreateStore = async (req,res,next)=>{

    try{
        const packages = await CreateStore.find()
        return res.status(200).json({ success: true, Data: packages });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error });
      }
  
}






const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
  
      cb(null, "../uploads/images");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const uploadImage = multer({ storage: imageStorage }).single("image");
  exports.postCreateStore = async (req, res, next) => {
    uploadImage(req, res, (err) => {
        if (err) {
          console.log(err);
        } else {
          const pdetails = new CreateStore({
            PhoneNum:req.body.PhoneNum,
            Domain:req.body.Domain,
            Address:req.body.Address,
            Name:req.body.Name
          });
          if (req.file) {
            pdetails.Gallery = req.file.path;
          }
          pdetails
            .save()
            .then((doc) => res.status(200).json({  success: true, Data: doc,}))
            .catch((err) => console.log(err));
        }
      });
    };


    exports.delCreateStore = async(req,res)=>{
        try{
            const {id} = req.params
            const deletPackage  = await CreateStore.findByIdAndDelete({_id:id})
            res.status(200).send({success:true,message:"Store delet successfully",});
        }
        catch(err){
         res.status(422).send({success:false,message:err.message})
        }
     }


     exports.upDateCreateStore = async(req,res)=>{
        uploadImage(req, res, (err) => {
            if (err) {
                console.log(err);
              }
            else if (req.file) {
                var data = {
                    PhoneNum:req.body.PhoneNum,
                    Domain:req.body.Domain,
                    Address:req.body.Address,
                    Name:req.body.Name,
                    Gallery: req.file.path,
    
    
                };
              } else {
                var data = {
                    PhoneNum:req.body.PhoneNum,
                    Domain:req.body.Domain,
                    Address:req.body.Address,
                    Name:req.body.Name
                };
              }
              console.log(data)
    
              const id = req.params.id;
              CreateStore.findByIdAndUpdate(id, data, function (err, docs) {
                console.log(data)
    
                if (err) {
                  console.log(err);
                } else {
                  return res.status(200).send({data:docs})
                }
              });  
            })
            
        };
     
    