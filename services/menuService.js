const Menu = require("../models/menu");

class MenuService {
  async getAll() {
    return await Menu.findAll();
  }

  async get(id) {
    const menu = await Menu.findByPk(id);
    if (menu == null) throw new TypeError("id does not exist");

    return menu;
  }

  async create(name) {
    return await Menu.create({
      name: name,
    });
  }

  async update(id, name) {
    const menu = await this.get(id);
    menu.name = name;

    return await menu.save();
  }

  async delete(id) {
    const menu = await this.get(id);
    return await menu.destroy();
  }
}

module.exports = new MenuService();
