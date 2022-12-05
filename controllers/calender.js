/** @format */
const { Order } = require("../models/OrderPage");
//get api for calender
exports.GetCalender = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cal = await Order.findById(id);
    return res.status(200).json({ success: true, Data: cal });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
