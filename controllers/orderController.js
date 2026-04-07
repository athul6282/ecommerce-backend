import Order from "../models/orderModels.js";

export const createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user.id });
  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("products");
  res.json(orders);
};

export const updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};

export const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};
