const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./dine-direct.db",
});

module.exports = sequelize;
