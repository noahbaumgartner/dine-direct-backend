const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ModifierGroup = sequelize.define("ModifierGroup", {
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

module.exports = ModifierGroup;
