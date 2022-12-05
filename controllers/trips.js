/** @format */

const { Trips } = require("../models/Trips");

exports.getTrips = async (req, res, next) => {
  try {
    const trip = await Trips.find();
    return res.status(200).json({ success: true, Data: trip });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
//post create own trip
exports.postTrips = async (req, res, next) => {
  const trip = await new Trips(req.body);
  trip.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      Data: doc,
    });
  });
};
