const sequelize = require("../config/database");
const Menu = require("./menu");
const Space = require("./space");

const SpaceAssignment = sequelize.define("SpaceAssignment", {});

Menu.belongsToMany(Space, { through: SpaceAssignment });
Space.belongsToMany(Menu, { through: SpaceAssignment });

module.exports = SpaceAssignment;
