const ProductAssignment = require("../models/productAssignment");

class ProductAssignmentService {
  async getAll() {
    return await ProductAssignment.findAll();
  }

  async get(id) {
    const productAssignment = await ProductAssignment.findByPk(id);
    if (productAssignment == null) throw new TypeError("id does not exist");

    return productAssignment;
  }

  async create(productGroupId, productId) {
    console.log(productGroupId, productId);
    return await ProductAssignment.create({
      ProductGroupId: productGroupId,
      ProductId: productId,
    });
  }

  async delete(id) {
    const ProductAssignment = await this.get(id);
    return await ProductAssignment.destroy();
  }
}

module.exports = new ProductAssignmentService();
