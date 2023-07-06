const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");

const Modifier = sequelize.define("Modifier", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceDiff: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.hasMany(Modifier);
Modifier.belongsTo(Product);

module.exports = Modifier;
