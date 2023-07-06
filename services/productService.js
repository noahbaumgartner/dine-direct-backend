const Product = require("../models/product");

class ProductService {
  async getAll() {
    return await Product.findAll();
  }

  async get(id) {
    const product = await Product.findByPk(id);
    if (product == null) throw new TypeError("id does not exist");

    return product;
  }

  async create(name, price) {
    return await Product.create({
      name: name,
      price: price,
    });
  }

  async update(id, name, price) {
    const Product = await this.get(id);
    Product.name = name;
    Product.price = price;

    return await Product.save();
  }

  async delete(id) {
    const Product = await this.get(id);
    return await Product.destroy();
  }
}

module.exports = new ProductService();
