const Modifier = require("../models/modifier");

class ModifierService {
  async getAllForModifierGroup(modifierGroupId) {
    const modifiers = await Modifier.findAll({
      where: {
        ModifierGroupId: modifierGroupId,
      },
    });

    return modifiers;
  }

  async create(name, priceDiff, modifierGroupId) {
    return await Modifier.create({
      name: name,
      priceDiff: priceDiff,
      ModifierGroupId: modifierGroupId,
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
