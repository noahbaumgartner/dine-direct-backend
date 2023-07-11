const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Menu = require("./menu");

const MenuGroup = sequelize.define("MenuGroup", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Menu.hasMany(MenuGroup);
MenuGroup.belongsTo(Menu);

module.exports = MenuGroup;
