/** @format */

const { Package } = require("../models/Packages");
const multer = require("multer");
const extend = require("lodash/extend");
const formidable = require("formidable");
const fs = require("fs");
//storage for images
const imageStorage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//middleware for image
// const uploadImage = multer({ storage: imageStorage }).array("img", 3);
const uploadImage = multer({
  storage: imageStorage,
}).fields([
  {
    name: "img1",
    maxCount: 1,
  },
  {
    name: "img2",
    maxCount: 1,
  },
  {
    name: "img3",
    maxCount: 1,
  },
]);
exports.postPackage = async (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    let package = {
      img1: {
        data: "",
        contentType: "",
      },
      img2: {
        data: "",
        contentType: "",
      },
      img3: {
        data: "",
        contentType: "",
      },
    };
    package = extend(package, fields);
    // console.log(files.photo);
    if (files.img1) {
      package.img1.data = fs.readFileSync(files.img1.filepath);
      package.img1.contentType = files.img1.type;
    }
    if (files.img2) {
      package.img2.data = fs.readFileSync(files.img2.filepath);
      package.img2.contentType = files.img2.type;
    }
    if (files.img3) {
      package.img3.data = fs.readFileSync(files.img3.filepath);
      package.img3.contentType = files.img3.type;
    }
    try {
      const packages = new Package(package);

      packages.save().then(() => {
        res.status(200).json({ succes: true, resoponse: "Uploaded", data: packages});
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
    // uploadImage(req, res, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     const package = new Package(req.body);
    //     if (req.file) {
    //       console.log("file hai", req.file);
    //       package.img1 = {
    //         data: fs.readFileSync("uploads/" + req.file.filename),
    //         contentType: req.file.mimetype,
    //       };
    //       console.log("paths", req.file.path);
    //     }
    //     package
    //       .save()
    //       .then(() =>
    //         res.status(200).json({ succes: true, resoponse: "Uploaded" })
    //       )
    //       .catch((err) => console.log(err));
    //   }
    // });
    // const package = await new Package(req.body);
    // package.save((err, doc) => {
    //   if (err) return res.json({ success: false, err });
    //   return res.status(200).json({
    //     success: true,
    //     Data: doc,
    //   });
    // });
  });
};

exports.getPackageNewsFeed = async (req, res, next) => {
  try {
    const packages = await Package.find();
    return res.status(200).json({ succes: true, data: packages });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
exports.getsinglePackages = async (req,res,next)=>{

  try{
    const id = req.params.id;
    const singlepackage = await Package.findById(id);
      return res.status(200).json({ success: true, data: singlepackage });

  }catch (error) {
      return res.status(500).json({err:error });
    }

}
