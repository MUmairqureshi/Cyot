/** @format */

const { Order } = require("../models/OrderPage");

exports.getOrders = async (req, res, next) => {
  try {
    const order = await Order.find();
    return res.status(200).json({ success: true, Data: order });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.postOrders = async (req, res, next) => {
  const order = await new Order(req.body);
  order.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      Data: doc,
    });
  });
};
