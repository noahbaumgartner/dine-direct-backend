const MenuGroupItem = require("../models/menuGroupItem");

class MenuGroupItemService {
  async getAll() {
    return await MenuGroupItem.findAll();
  }

  async get(id) {
    const menuGroupItem = await MenuGroupItem.findByPk(id);
    if (menuGroupItem == null) throw new TypeError("id does not exist");

    return menuGroupItem;
  }

  async create(name, menuGroupId, productId) {
    return await MenuGroupItem.create({
      name: name,
      MenuGroupId: menuGroupId,
      ProductId: productId,
    });
  }

  async update(id, name) {
    const menuGroupItem = await this.get(id);
    menuGroupItem.name = name;

    return await menuGroupItem.save();
  }

  async delete(id) {
    const menuGroupItem = await this.get(id);
    return await menuGroupItem.destroy();
  }
}

module.exports = new MenuGroupItemService();
