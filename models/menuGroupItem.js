const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const MenuGroup = require("./menuGroup");

const MenuGroupItem = sequelize.define("MenuGroupItem", {
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

MenuGroup.hasMany(MenuGroupItem);
MenuGroupItem.belongsTo(MenuGroup);

module.exports = MenuGroupItem;
