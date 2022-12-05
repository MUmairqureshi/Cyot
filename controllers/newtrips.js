/** @format */

const { NewTrips } = require("../models/NewTrips");

exports.getNewTrip = async (req, res, next) => {
  try {
    const trip = await NewTrips.find();
    return res.status(200).json({ success: true, Data: trip });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
