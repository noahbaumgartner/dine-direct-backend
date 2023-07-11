const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PrintJob = require("./printJob");

const Print = sequelize.define("Print", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

PrintJob.hasMany(Print);
Print.belongsTo(PrintJob);

module.exports = Print;
