/** @format */

const mongoose = require("mongoose");
const { Number } = require("mongoose");
const { Schema } = mongoose;
//schrma for profile f user
const profileSchema = new Schema({
  Fullname: {
    type: String,
    maxlength: 50,
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

  phoneNumber: {
    type: Number,
    maxlength: 11,
  },
  ProfilePicture: {
    data: Buffer,
    contentType: String,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile };
