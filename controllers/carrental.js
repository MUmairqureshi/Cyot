/** @format */

const { carRental } = require("../models/CarRental");
//post api for car rental details.
exports.carRental = async (req, res, next) => {
  const car = await new carRental(req.body);
  car.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      Data: doc,
    });
  });
};
