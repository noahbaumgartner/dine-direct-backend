const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Printer = sequelize.define("Printer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Printer;
