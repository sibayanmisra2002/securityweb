const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect"); // Import your Sequelize instance

const criminals = sequelize.define("criminals", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  record_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  native_place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  criminal_record: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = criminals;
