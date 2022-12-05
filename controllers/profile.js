/** @format */

const multer = require("multer");
const fs = require("fs");
const extend = require("lodash/extend");
const formidable = require("formidable");
const { Profile } = require("../models/ProfilePage");

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
const uploadImage = multer({ storage: imageStorage }).single("image");

//post api for uploading profile details to database
exports.postProfile = async (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const profile = new Profile({
        Fullname: req.body.Fullname,
        city: req.body.city,
        cnic: req.body.cnic,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      });
      if (req.file) {
        profile.ProfilePicture = {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
        };
        console.log("paths", req.file.path);
      }
      profile
        .save()
        .then(() =>
          res.status(200).json({ succes: true, resoponse: "Uploaded" })
        )
        .catch((err) => console.log(err));
    }
  });
};
//get api for profile of a user
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ _id: req.params.id });
    return res.status(200).json({
      succes: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({ succes: false, Error: error });
  }
};
//put api for profilepage to update profile details
exports.updateProfile = async (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    //   let user = req.profile;
    //   user = extend(user, fields);
    //   user.updated = Date.now();
    // console.log(files.photo);
    console.log(fields);
    // console.log(files);
    // if (files.ProfilePicture) {
    //   console.log("here");
    //   // console.log("fded", files.ProfilePicture.filepath);

    //   var ProfilePicture = fs.readFileSync(files.ProfilePicture.filepath);
    //   // fields.ProfilePicture.contentType = files.ProfilePicture.mimetype;
    // }
    // let dataas = extend(fields, ProfilePicture);
    // console.log(data);
    if (files.ProfilePicture) {
      console.log("file hai");
      var datai = {
        Fullname: fields.Fullname,
        city: fields.city,
        cnic: fields.cnic,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        ProfilePicture: {
          data: fs.readFileSync(files.ProfilePicture.filepath),
          contentType: files.ProfilePicture.mimetype,
        },
      };
    } else {
      console.log("file nahi hai");
      var datai = {
        Fullname: fields.Fullname,
        city: fields.city,
        cnic: fields.cnic,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
      };
    }

    const id = req.params.id;
    Profile.findByIdAndUpdate(id, datai, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          status: "true",
          OldProfile: docs,
        });
      }
    });
  });
};
