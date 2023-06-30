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
  price_diff: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  product_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

module.exports = Modifier;
