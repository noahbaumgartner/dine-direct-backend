const Modifier = require("../models/modifier");

class ModifierService {
  async getAllForProduct(productId) {
    const modifiers = await Modifier.findAll({
      where: {
        ProductId: productId,
      },
    });

    return modifiers;
  }

  async create(name, priceDiff, productId) {
    return await Modifier.create({
      name: name,
      priceDiff: priceDiff,
      ProductId: productId,
    });
  }

  async delete(modifierId) {
    return await Modifier.destroy({
      where: {
        id: modifierId,
      },
    });
  }
}

module.exports = new ModifierService();
