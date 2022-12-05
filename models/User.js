/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { Number } = require("mongoose");
const { Schema } = mongoose;

//Schema for User

const UserSchema = new Schema({
  Fullname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  city: {
    type: String,
    maxlength: 20,
    required: true,
  },
  cnic: {
    type: Number,
    maxlength: 13,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  password: {
    type: String,
    minglength: 5,
    required: true,
  },
  phoneNumber: {
    type: Number,
    maxlength: 11,
    required: true,
  },
  ProfilePicture: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    // console.log('password changed')
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});
//checking if the entered password is correct or not
UserSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
//genersting token using jwt and saving it to database
UserSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "secret");
  var oneHour = moment().add(1, "hour").valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

UserSchema.statics.findByToken = function (token, cb) {
  var user = this;

  verify(token, "secret", function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};
const User = mongoose.model("User", UserSchema);

module.exports = { User };
