const Product = require("../models/product");

class ProductService {
  async getAll() {
    return await Product.findAll();
  }

  async get(id) {
    const Product = await Product.findByPk(id);
    if (Product == null) throw new TypeError("id does not exist");

    return await Product;
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

    return Product.save();
  }

  async delete(id) {
    const Product = await this.get(id);
    return await Product.destroy();
  }
}

module.exports = new ProductService();
