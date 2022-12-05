/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema for Calender
const calenderSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  namesOfDestination: [{ type: String }],
  camping: [{ type: String }],
  guestHouses: [{ type: String }],
  transport: { type: String },
});

const Calender = mongoose.model("Calender", calenderSchema);

module.exports = { Calender };
