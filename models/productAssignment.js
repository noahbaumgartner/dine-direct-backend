const sequelize = require("../config/database");

const ProductGroup = require("./productGroup");
const Product = require("./product");

const ProductAssignment = sequelize.define("ProductAssignment", {});

ProductGroup.belongsToMany(Product, { through: ProductAssignment });
Product.belongsToMany(ProductGroup, { through: ProductAssignment });

module.exports = ProductAssignment;
