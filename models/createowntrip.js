/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const createowntripSchema = new Schema({
  //schema for making your own trip
  Budget: { 
    type: Number,
    required: true,
  },
  PickupLocation: {
    type: String,
    required: true,
  },
  NoOfAdult: {
    type: Number,
    required: true,
  },
  NoOfKids: {
    type: Number,
    required: true,
  },
  TourType: {
    type: String,
    required: true,
  },
  modeOfTransport:{
    type:String
  },
  Destination: [{ type: String }],
  Meals: {
    type: Boolean,
    required: true,
  },
  HotelType: {
    type: String,
  },
  NoOfRoom: {
    type: Number,
  },
  NoOfdays: {
    type: Number,
  },
  packageDetail:{
    type:String,
    required:true,
  },

  postedBy:{
    type:mongoose.Schema.ObjectId, 
    ref:"User",
  },
  created:{
    type:Date,
    default:Date.now,
  }

});

const createowntrip = mongoose.model("createowntrip", createowntripSchema);

module.exports = { createowntrip };
