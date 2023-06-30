const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const ProductGroup = require("./productGroup");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  product_group_id: {
    type: Sequelize.INTEGER,
    references: {
      model: ProductGroup,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

module.exports = Product;
