const ProductAssignment = require("../models/productAssignment");

class ProductAssignmentService {
  async getAllForProductGroup(productGroupId) {
    const productAssignments = await ProductAssignment.findAll({
      where: {
        ProductGroupId: productGroupId,
      },
    });

    return productAssignments;
  }

  async create(productGroupId, productId) {
    return await ProductAssignment.create({
      ProductGroupId: productGroupId,
      ProductId: productId,
    });
  }

  async delete(productGroupId, productId) {
    return await ProductAssignment.destroy({
      where: {
        ProductGroupId: productGroupId,
        ProductId: productId,
      },
    });
  }
}

module.exports = new ProductAssignmentService();
