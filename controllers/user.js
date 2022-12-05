/** @format */

const multer = require("multer");

const { User } = require("../models/User");

//=================================
//             User
//=================================

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
//uploading image
const uploadImage = multer({ storage: imageStorage }).single("image");

//post api for registering user
exports.register = (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const user = new User({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      });
      if (req.file) {
        user.ProfilePicture = req.file.path;
      }
      user
        .save()
        .then(() => res.status(200).json({ succes: true, response: "Successfully Registered" }))
        .catch((err) => console.log(err));
    }
  });
};

//post api for login
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
};

exports.getLogin = (req, res, next) => {
  User.findOne({ _id: req.body.id }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        loginSuccess: true,
        docs,
      });
    }
  });
};
