const Order = require("../models/order");

class OrderService {
  async getAll() {
    return await Order.findAll();
  }

  async get(id) {
    const order = await Order.findByPk(id);
    if (order == null) throw new TypeError("id does not exist");

    return order;
  }

  async create() {
    return await Order.create();
  }

  async delete(id) {
    const order = await this.get(id);
    return await order.destroy();
  }
}

module.exports = new OrderService();
