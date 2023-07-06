const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Space = sequelize.define("Space", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Space;
