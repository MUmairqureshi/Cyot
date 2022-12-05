/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const geocoder = require("../utils/geocoder");

//Trips Schema
const TripsSchema = new Schema({
  CurrentAddress: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
  },
  numberofpeople: {
    type: Number,
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
  budget: {
    type: String,
    required: true,
  },
  namesOfDestination: [{ type: String }],
  camping: [{ type: String }],
  guestHouses: [{ type: String }],
  transport: { type: String },
});

//Geocode & create locationg and save longitute and latitude to database

TripsSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.CurrentAddress);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: [loc[0].formattedAddress],
  };
  next();
});
const Trips = mongoose.model("Trips", TripsSchema);
module.exports = { Trips };
