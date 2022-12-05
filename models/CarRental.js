/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema for car rental
const CarRentalSchema = new Schema({
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
  },
  CarNumber: {
    type: String,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
  ByWhen: {
    type: String,
    required: true,
  },
  WithDriver: {
    type: String,
  },
  WithoutDriver: {
    type: String,
  },
});

const carRental = mongoose.model("carRental", CarRentalSchema);

module.exports = { carRental };
