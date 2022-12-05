/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema for new trips
const NewTripsSchema = new Schema({
  noOfDays: {
    type: Number,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  namesOfDestination: [{ type: String }],
  camping: [{ type: String }],
  guestHouses: [{ type: String }],
  transport: { type: String },
});

const NewTrips = mongoose.model("NewTrips", NewTripsSchema);
module.exports = { NewTrips };
