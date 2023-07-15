const sequelize = require("../config/database");
const Menu = require("./menu");
const MenuGroup = require("./menuGroup");

const MenuGroupAssignment = sequelize.define("MenuGroupAssignment", {});

Menu.belongsToMany(MenuGroup, { through: MenuGroupAssignment });
MenuGroup.belongsToMany(Menu, { through: MenuGroupAssignment });

module.exports = MenuGroupAssignment;
