const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrintTemplate = sequelize.define("PrintTemplate", {
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

module.exports = PrintTemplate;
