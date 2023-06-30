const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductGroup = sequelize.define("ProductGroup", {
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

module.exports = ProductGroup;
