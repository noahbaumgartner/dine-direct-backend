const sequelize = require("../config/database");
const Product = require("./product");
const MenuGroupItem = require("./menuGroupItem");

const ProductMenuAssignment = sequelize.define("ProductMenuAssignment", {});

MenuGroupItem.belongsToMany(Product, { through: ProductMenuAssignment });
Product.belongsToMany(MenuGroupItem, { through: ProductMenuAssignment });

module.exports = ProductAssignment;
