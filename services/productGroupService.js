const ProductGroup = require("../models/productGroup");

class ProductGroupService {
  async getAll() {
    return await ProductGroup.findAll();
  }

  async get(id) {
    const productGroup = await ProductGroup.findByPk(id);
    if (productGroup == null) throw new TypeError("id does not exist");

    return productGroup;
  }

  async create(name) {
    return await ProductGroup.create({
      name: name,
    });
  }

  async update(id, name) {
    const productGroup = await this.get(id);
    productGroup.name = name;

    return await productGroup.save();
  }

  async delete(id) {
    const productGroup = await this.get(id);
    return await productGroup.destroy();
  }
}

module.exports = new ProductGroupService();
