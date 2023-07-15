const MenuGroup = require("../models/menuGroup");

class MenuGroupService {
  async getAll() {
    return await MenuGroup.findAll();
  }

  async get(id) {
    const menuGroup = await MenuGroup.findByPk(id);
    if (menuGroup == null) throw new TypeError("id does not exist");

    return menuGroup;
  }

  async create(name) {
    return await MenuGroup.create({
      name: name,
    });
  }

  async update(id, name) {
    const menuGroup = await this.get(id);
    menuGroup.name = name;

    return await menuGroup.save();
  }

  async delete(id) {
    const menuGroup = await this.get(id);
    return await menuGroup.destroy();
  }
}

module.exports = new MenuGroupService();
