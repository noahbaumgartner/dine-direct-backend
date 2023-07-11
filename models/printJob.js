const Printer = require("../models/printer");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PrintTemplate = require("./printTemplate");

const PrintJob = sequelize.define("PrintJob", {
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

PrintTemplate.hasMany(PrintJob);
PrintJob.belongsTo(PrintTemplate);

Printer.hasMany(PrintJob);
PrintJob.belongsTo(Printer);

module.exports = PrintJob;
