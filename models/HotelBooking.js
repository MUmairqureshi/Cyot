/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema for HotelBooking details
const hotelSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  CNIC: {
    type: String,
    required: true,
    unique: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  noOfpeople: {
    type: Number,
    required: true,
  },
  couple: {
    type: String,
    required: true,
  },
  noOfdays: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = { Hotel };
