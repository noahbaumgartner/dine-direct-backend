const ModifierGroup = require("../models/modifierGroup");

class ModifierGroupService {
  async getAll() {
    const modifierGroups = await ModifierGroup.findAll();
    return modifierGroups;
  }

  async get(id) {
    const modifierGroup = await ModifierGroup.findByPk(id);
    if (modifierGroup == null) throw new TypeError("id does not exist");

    return modifierGroup;
  }

  async create(name) {
    return await ModifierGroup.create({
      name: name,
    });
  }

  async update(id, name) {
    const modifierGroup = await this.get(id);
    modifierGroup.name = name;

    return await modifierGroup.save();
  }

  async delete(modifierId) {
    return await ModifierGroup.destroy({
      where: {
        id: modifierId,
      },
    });
  }
}

module.exports = new ModifierGroupService();
