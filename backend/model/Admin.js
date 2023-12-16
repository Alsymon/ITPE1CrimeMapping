const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Admin = sequelize.define('tbl_admin', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  }, {
    timestamps: false, 
  });

  return Admin;
};