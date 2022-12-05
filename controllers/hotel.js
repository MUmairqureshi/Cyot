/** @format */

const { Hotel } = require("../models/HotelBooking");

exports.hotelDetail = async (req, res, next) => {
  const hotel = await new Hotel(req.body);
  hotel.save((err, doc) => {
    if (err) {
      if (err.code === 11000) {
        return res.status(400).json({ success: false, Message: "CNIC Number exists already" });
      } else {
        return res.json({ success: false, err });
      }
    }
    return res.status(200).json({
      success: true,
      data: doc,
    });
  });
};
exports.getHotelDetail = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json({ succes: true, data: hotels });
  } catch (error) {
    return res.status(500).json({ succes: false, Error: error });
  }
};
