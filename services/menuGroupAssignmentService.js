const MenuGroupAssignment = require("../models/menuGroupAssignment");

class MenuGroupAssignmentService {
  async getAllForMenu(menuId) {
    const menuGroupAssignment = await MenuGroupAssignment.findAll({
      where: {
        MenuId: menuId,
      },
    });

    return menuGroupAssignment;
  }

  async create(menuId, menuGroupId) {
    return await MenuGroupAssignment.create({
      MenuId: menuId,
      MenuGroupId: menuGroupId,
    });
  }

  async delete(menuId, menuGroupId) {
    return await MenuGroupAssignment.destroy({
      where: {
        MenuId: menuId,
        MenuGroupId: menuGroupId,
      },
    });
  }
}

module.exports = new MenuGroupAssignmentService();
