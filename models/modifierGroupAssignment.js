const sequelize = require("../config/database");
const ModifierGroup = require("./modifierGroup");
const Product = require("./product");

const ModifierGroupAssignment = sequelize.define("ModifierGroupAssignment", {});

Product.belongsToMany(ModifierGroup, { through: ModifierGroupAssignment });
ModifierGroup.belongsToMany(Product, { through: ModifierGroupAssignment });

module.exports = ModifierGroupAssignment;
